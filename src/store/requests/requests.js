const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const tmdb_requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchDrama: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchFantasy: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
};

function fetchMovieById(id) {
  return `/movie/${id}?api_key=${API_KEY}&language=en-US`;
}

function fetchMovieCredits(id) {
  return `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
}

function fetchNetworkCompanies(id) {
  return `/network/${id}?api_key=${API_KEY}`;
}

function fetchNetworkMovies(id) {
  return `/discover/tv?api_key=${API_KEY}&with_networks=${id}`;
}

function querySearch(text) {
  return `search/movie?api_key=${API_KEY}&language=en-US&query=${text}&page=1&include_adult=false`;
}

const requests = {
  tmdb_requests,
  fetchMovieById,
  fetchMovieCredits,
  fetchNetworkCompanies,
  fetchNetworkMovies,
  querySearch,
};

export default requests;
