import { createSlice } from "@reduxjs/toolkit";
import axios from "../requests/axios";
import requests from "../requests/requests";
import heroku_axios from "../requests/heroku_axios";
import gc_axios from "../requests/gc_axios";

/************** STATE **************/
const initialState = {
  movies: [],
  sliderMovies: [],
  compareMovies: [],
  loading: false, // Indicates the loading state
  movie: null,
  networkTVShows: [], //Indicates the fetched networks TVShows
  showResults: 0, // Inidcates TV Shows results
  table_data: [],
  reviews: [],
  have_review: null,
};

/************** STATE SLICE **************/
const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },
    setSliderMovies(state, action) {
      state.sliderMovies = action.payload;
    },
    setCompareMovies(state, action) {
      state.compareMovies = action.payload;
    },
    addCompareMovie(state, action) {
      let newMovies = [...state.compareMovies];
      newMovies.push(action.payload);
      state.compareMovies = newMovies;
    },
    removeCompareMovie(state, action) {
      let id = action.payload;
      let newMovies = [
        ...state.compareMovies.filter((movie) => movie.id !== id),
      ];
      state.compareMovies = newMovies;
    },
    moviesSetLoading(state, action) {
      state.loading = action.payload;
    },
    setMovie(state, action) {
      state.movie = action.payload;
    },
    moviesSetNetworkTVShows(state, action) {
      state.networkTVShows = [];
      state.networkTVShows = action.payload;
    },
    moviesSetShowResults(state, action) {
      state.showResults = action.payload;
    },
    setTableData(state, action) {
      state.table_data = action.payload;
    },
    setReviews(state, action) {
      state.reviews = action.payload;
    },
    setReview(state, action) {
      state.reviews.push(action.payload);
    },
    setHaveReview(state, action) {
      state.have_review = action.payload;
    },
    moviesReset() {
      return initialState;
    },
  },
});

/************** EXPORTED ACTIONS & REDUCERS **************/
export default moviesSlice.reducer;
export const {
  setMovies,
  setSliderMovies,
  setCompareMovies,
  addCompareMovie,
  removeCompareMovie,
  setMovie,
  moviesSetLoading,
  moviesSetNetworkTVShows,
  moviesSetShowResults,
  setTableData,
  moviesReset,
  setReviews,
  setReview,
  setHaveReview,
} = moviesSlice.actions;

/************** THUNKS **************/

export const getMoviesByType = (type, page) => {
  return (dispatch) => {
    dispatch(moviesSetLoading(true));
    heroku_axios
      .get(requests.fetchMoviesByType(type, page))
      .then((response) => {
        if (type === "trending") {
          dispatch(setMovies(response.data.movies.splice(8, 19)));
          dispatch(setSliderMovies(response.data.movies.slice(0, 8)));
        } else {
          dispatch(setMovies(response.data.movies));
        }
        dispatch(moviesSetLoading(false));
      })
      .catch((error) => {
        dispatch(moviesSetLoading(false));
        console.log(error);
      });
  };
};

export const getMovieById = ({ id }) => {
  return (dispatch) => {
    dispatch(moviesSetLoading(true));
    heroku_axios
      .get(requests.fetchMovieById(id))
      .then((result) => {
        dispatch(setMovie(result.data));
        setTimeout(() => {
          dispatch(moviesSetLoading(false));
        }, 1000);
      })
      .catch((error) => {
        dispatch(moviesSetLoading(false));
        if (error.response.status === 404) {
          window.location.href = "/404";
          return;
        }
      });
  };
};

export const getNetworkMovies = (id) => {
  return (dispatch) => {
    dispatch(moviesSetLoading(true));
    axios
      .get(requests.fetchNetworkTvShows(id))
      .then((movies) => {
        dispatch(moviesSetShowResults(movies.data.total_results));
        dispatch(moviesSetNetworkTVShows(movies.data.results));
        dispatch(moviesSetLoading(false));
      })
      .catch((error) => {
        dispatch(moviesSetLoading(false));
        console.log(error);
      });
  };
};

export const getCompareMovieById = ({ id }) => {
  return (dispatch) => {
    dispatch(moviesSetLoading(true));
    heroku_axios
      .get(requests.fetchMovieById(id))
      .then((movies) => {
        dispatch(addCompareMovie(movies.data.details));
        dispatch(moviesSetLoading(false));
      })
      .catch((error) => {
        dispatch(moviesSetLoading(false));
        console.log(error);
      });
  };
};

export const addCompareMovieById = (id, data) => {
  let config = {
    method: "post",
    url:
      "https://sep-6-movies-server.herokuapp.com" +
      requests.addCompareMovie(id),
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  };

  return (dispatch) => {
    dispatch(moviesSetLoading(true));
    axios(config)
      .then((movies) => {
        dispatch(setCompareMovies(movies.data.movies));
        dispatch(moviesSetLoading(false));
      })
      .catch((error) => {
        dispatch(moviesSetLoading(false));
        console.log(error);
      });
  };
};

export const getBoxOfficeByYear = (year) => {
  return (dispatch) => {
    dispatch(moviesSetLoading(true));
    gc_axios
      .get(requests.getBoxOfficeByYear(year))
      .then((table) => {
        console.log(table);
        dispatch(setTableData(table.data.box_office_movies));
        dispatch(moviesSetLoading(false));
      })
      .catch((error) => {
        dispatch(moviesSetLoading(false));
        console.log(error);
      });
  };
};

export const getReviews = (user_id, movie_id) => {
  return (dispatch) => {
    gc_axios
      .get(requests.getReviews(user_id, movie_id))
      .then((reviews) => {
        dispatch(setHaveReview(reviews.data.have_review));
        dispatch(setReviews(reviews.data.reviews));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addReview = (user_id, movie_id, title, comment, rating) => {
  return (dispatch) => {
    const review = {
      user_id: user_id,
      movie_id: movie_id,
      title: title,
      comment: comment,
      stars: rating,
    };
    gc_axios
      .post(requests.setReview(), review)
      .then((response) => {
        dispatch(setReview(response.data));
        dispatch(setHaveReview(true));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
