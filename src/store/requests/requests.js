const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

function fetchActorById(id) {
  return `/person?id=${id}`;
 }

function fetchMovieById(id) {
  return `/movie?id=${id}`;
}

function fetchMoviesByType(type, page) {
  return `/movies?type=${type}&page=${page}`;
}

function fetchNetworkCompanies(id) {
  return `/network/${id}?api_key=${API_KEY}`;
}

function fetchNetworkMovies(id) {
  return `/discover/movie?api_key=${API_KEY}&with_networks=${id}`;
}

function fetchNetworkTvShows(id) {
  return `/discover/tv?api_key=${API_KEY}&with_networks=${id}`;
}

function querySearch(text) {
  return `search/movie?api_key=${API_KEY}&language=en-US&query=${text}&page=1&include_adult=false`;
}

function addCompareMovie(id) {
  return `/compare?movie_id=${id}`;
}
const requests = {
  fetchActorById,
  fetchMovieById,
  fetchNetworkCompanies,
  fetchNetworkMovies,
  fetchNetworkTvShows,
  querySearch,
  fetchMoviesByType,
  addCompareMovie,
};

export default requests;
