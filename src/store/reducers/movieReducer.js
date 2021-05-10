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
  dramaMovies: [], // Indicates the drama movies data
  fantasyMovies: [], // Indicates the fantasy movies data
  mysteryMovies: [], // Indicates the mystery movies data
  loading: false, // Indicates the loading state
  movie: null,
  favoriteMovies: [], // Indicates the favorite movies
  networkTVShows: [], //Indicates the fetched networks TVShows
  showResults: 0, // Inidcates TV Shows results
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
    moviesSetDramaMovies(state, action) {
      state.dramaMovies = action.payload;
    },
    moviesSetMysteryMovies(state, action) {
      state.mysteryMovies = action.payload;
    },
    moviesSetFantasyMovies(state, action) {
      state.fantasyMovies = action.payload;
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
    moviesSetNetworkTVShows(state, action) {
      state.networkTVShows = [];
      state.networkTVShows = action.payload;
    },
    moviesSetShowResults(state, action) {
      state.showResults = action.payload;
    },
    moviesReset() {
      return initialState;
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
  moviesSetDramaMovies,
  moviesSetFantasyMovies,
  moviesSetMysteryMovies,
  moviesSetLoading,
  setMovie,
  moviesSetFavoriteMovies,
  moviesSetNetworkTVShows,
  moviesSetShowResults,
  moviesReset,
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
    dispatch(moviesSetLoading(true));
    axios
      .get(requests.tmdb_requests.fetchTopRated)
      .then((movies) => {
        dispatch(moviesSetTopRatedMovies(movies.data.results));
        dispatch(moviesSetLoading(false));
      })
      .catch((error) => {
        dispatch(moviesSetLoading(false));
        console.log(error);
      });
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

export const getDramaMovies = () => {
  return (dispatch) => {
    axios
      .get(requests.tmdb_requests.fetchDrama)
      .then((movies) => {
        dispatch(moviesSetDramaMovies(movies.data.results));
      })
      .catch((error) => console.log(error));
  };
};

export const getMysteryMovies = () => {
  return (dispatch) => {
    axios
      .get(requests.tmdb_requests.fetchMystery)
      .then((movies) => {
        dispatch(moviesSetMysteryMovies(movies.data.results));
      })
      .catch((error) => console.log(error));
  };
};

export const getFantasyMovies = () => {
  return (dispatch) => {
    axios
      .get(requests.tmdb_requests.fetchFantasy)
      .then((movies) => {
        dispatch(moviesSetFantasyMovies(movies.data.results));
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

export const getFavoriteMovies = (uid) => {
  return (dispatch) => {
    const ref = db.ref("users/" + uid).orderByChild("index");
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

export const getNetworkMovies = (id) => {
  return (dispatch) => {
    dispatch(moviesSetLoading(true));
    axios
      .get(requests.fetchNetworkTvShows(id))
      .then((movies) => {
        console.log(movies);
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

export const getMovieType = (type) => {
  return (dispatch) => {
    switch (type) {
      case "comedy":
        dispatch(getComedyMovies());
        break;
      case "horror":
        dispatch(getHorrorMovies());
        break;
      case "top-rated":
        dispatch(getTopRatedMovies());
        break;
      case "action":
        dispatch(getActionMovies());
        break;
      case "romance":
        dispatch(getRomanceMovies());
        break;
      case "mystery":
        dispatch(getMysteryMovies());
        break;
      case "drama":
        dispatch(getDramaMovies());
        break;
      case "fantasy":
        dispatch(getFantasyMovies());
        break;
      case "documentaries":
        dispatch(getDocumentariesMovies());
        break;
      default:
        break;
    }
  };
};
