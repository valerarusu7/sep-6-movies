import { createSlice } from "@reduxjs/toolkit";
import db from "../../firebase/firebase";
import axios from "../requests/axios";
import requests from "../requests/requests";

/************** STATE **************/
const initialState = {
  documentariesMovies: [], // Indicates the documentaries movies data
  trendingMovies: [], // Indicates the trending movies data
  netflixOriginalsMovies: [], // Indicates the netflix movies data
  topRatedMovies: [], // Indicates the top rated movies data
  actionMovies: [], // Indicates the action movies data
  comedyMovies: [], // Indicates the comedy movies data
  horrorMovies: [], // Indicates the horror movies data
  romanceMovies: [], // Indicates the romance movies data
  loading: false, // Indicates the loading state
  movie: null,
  favoriteMovies: [], // Indicates the favorite movies
  isFavorite: false, // Indicates if the fetched movie is favorite
};

/************** STATE SLICE **************/
const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    moviesSetDocumentariesMovies(state, action) {
      state.documentariesMovies = action.payload;
    },
    moviesSetTrendingMovies(state, action) {
      state.trendingMovies = action.payload;
    },
    moviesSetNetflixMovies(state, action) {
      state.netflixOriginalsMovies = action.payload;
    },
    moviesSetTopRatedMovies(state, action) {
      state.topRatedMovies = action.payload;
    },
    moviesSetActionMovies(state, action) {
      state.actionMovies = action.payload;
    },
    moviesSetComedyMovies(state, action) {
      state.comedyMovies = action.payload;
    },
    moviesSetHorrorMovies(state, action) {
      state.horrorMovies = action.payload;
    },
    moviesSetRomanceMovies(state, action) {
      state.romanceMovies = action.payload;
    },
    moviesSetLoading(state, action) {
      state.loading = action.payload;
    },
    setMovie(state, action) {
      state.movie = action.payload;
    },
    moviesSetFavoriteMovies(state, action) {
      state.favoriteMovies = action.payload;
    },
    moviesSetIsFavorite(state, action) {
      state.isFavorite = action.payload;
    },
  },
});

/************** EXPORTED ACTIONS & REDUCERS **************/
export default moviesSlice.reducer;
export const {
  moviesSetDocumentariesMovies,
  moviesSetTrendingMovies,
  moviesSetNetflixMovies,
  moviesSetTopRatedMovies,
  moviesSetActionMovies,
  moviesSetComedyMovies,
  moviesSetHorrorMovies,
  moviesSetRomanceMovies,
  moviesSetLoading,
  setMovie,
  moviesSetFavoriteMovies,
  moviesSetIsFavorite,
} = moviesSlice.actions;

/************** THUNKS **************/
export const getTrendingMovies = () => {
  return (dispatch) => {
    axios
      .get(requests.tmdb_requests.fetchTrending)
      .then((movies) => {
        dispatch(moviesSetTrendingMovies(movies.data.results));
      })
      .catch((error) => console.log(error));
  };
};

export const getTopRatedMovies = () => {
  return (dispatch) => {
    axios
      .get(requests.tmdb_requests.fetchTopRated)
      .then((movies) => {
        dispatch(moviesSetTopRatedMovies(movies.data.results));
      })
      .catch((error) => console.log(error));
  };
};

export const getNetflixMovies = () => {
  return (dispatch) => {
    axios
      .get(requests.tmdb_requests.fetchNetflixOriginals)
      .then((movies) => {
        dispatch(moviesSetNetflixMovies(movies.data.results));
      })
      .catch((error) => console.log(error));
  };
};

export const getActionMovies = () => {
  return (dispatch) => {
    axios
      .get(requests.tmdb_requests.fetchActionMovies)
      .then((movies) => {
        dispatch(moviesSetActionMovies(movies.data.results));
      })
      .catch((error) => console.log(error));
  };
};

export const getComedyMovies = () => {
  return (dispatch) => {
    axios
      .get(requests.tmdb_requests.fetchComedyMovies)
      .then((movies) => {
        dispatch(moviesSetComedyMovies(movies.data.results));
      })
      .catch((error) => console.log(error));
  };
};

export const getRomanceMovies = () => {
  return (dispatch) => {
    axios
      .get(requests.tmdb_requests.fetchRomanceMovies)
      .then((movies) => {
        dispatch(moviesSetRomanceMovies(movies.data.results));
      })
      .catch((error) => console.log(error));
  };
};

export const getHorrorMovies = () => {
  return (dispatch) => {
    axios
      .get(requests.tmdb_requests.fetchHorrorMovies)
      .then((movies) => {
        dispatch(moviesSetHorrorMovies(movies.data.results));
      })
      .catch((error) => console.log(error));
  };
};

export const getDocumentariesMovies = () => {
  return (dispatch) => {
    axios
      .get(requests.tmdb_requests.fetchDocumentaries)
      .then((movies) => {
        dispatch(moviesSetDocumentariesMovies(movies.data.results));
      })
      .catch((error) => console.log(error));
  };
};

export const getMovieById = (id) => {
  return (dispatch) => {
    axios
      .get(requests.fetchMovieById(id))
      .then((result) => {
        dispatch(setMovie(result.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const isFavoriteMovie = (favoriteMovies, id) => {
  return (dispatch) => {
    dispatch(moviesSetIsFavorite(false));
    if (favoriteMovies.length !== 0) {
      favoriteMovies.map((movie) => {
        if (movie.id == id) {
          dispatch(moviesSetIsFavorite(true));
        } else {
          dispatch(moviesSetIsFavorite(false));
        }
      });
    }
  };
};
export const getFavoriteMovies = (uid) => {
  return (dispatch) => {
    const ref = db.ref("users/" + uid);
    ref.on(
      "value",
      function (snapshot) {
        let data = [];
        snapshot.forEach((item) => {
          data.push(item.val());
        });
        dispatch(moviesSetFavoriteMovies(data));
      },
      function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      }
    );
  };
};
