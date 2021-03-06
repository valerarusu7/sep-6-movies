const TMDB_API_KEY = "e453502d7e2f31ded447961d9d1f121c";
const GC_API_KEY = "AIzaSyCIEwl5Zgwu02erH2Za2V3ZFNuRgKQFEDU";

function fetchPersonById(id) {
  return `/person?id=${id}`;
}

function fetchMovieById(id) {
  return `/movie?id=${id}`;
}

function fetchMoviesByType(type, page) {
  return `/movies?type=${type}&page=${page}`;
}

function fetchNetworkCompanies(id) {
  return `/network/${id}?api_key=${TMDB_API_KEY}`;
}

function fetchNetworkMovies(id) {
  return `/discover/movie?api_key=${TMDB_API_KEY}&with_networks=${id}`;
}

function fetchNetworkTvShows(id) {
  return `/discover/tv?api_key=${TMDB_API_KEY}&with_networks=${id}`;
}

function querySearch(text, year) {
  if (year) {
    return `search/movie?api_key=${TMDB_API_KEY}&language=en-US&query=${text}&page=1&include_adult=false&year=${year}`;
  } else {
    return `search/movie?api_key=${TMDB_API_KEY}&language=en-US&query=${text}&page=1&include_adult=false`;
  }
}

function addCompareMovie(id) {
  return `/compare?movie_id=${id}`;
}

function getBoxOfficeByYear(year) {
  return `/statistics?key=${GC_API_KEY}&year=${year}`;
}

function getReviews(uid, movie_id) {
  return `/reviews?key=${GC_API_KEY}&user_id=${uid}&movie_id=${movie_id}`;
}

function postAdditionalUserInfo(uid) {
  return `/new/user?key=${GC_API_KEY}&user_id=${uid}`;
}

function getAdditionalUserInfo(uid) {
  return `/user/info?key=${GC_API_KEY}&user_id=${uid}`;
}

function setReview() {
  return `/review?key=${GC_API_KEY}`;
}

function getYearlyStatistics() {
  return `/statistics/total?key=${GC_API_KEY}`;
}

function putAdditionalUserInfo() {
  return `/user?key=${GC_API_KEY}`;
}

const requests = {
  fetchPersonById,
  fetchMovieById,
  fetchNetworkCompanies,
  fetchNetworkMovies,
  fetchNetworkTvShows,
  querySearch,
  fetchMoviesByType,
  addCompareMovie,
  getBoxOfficeByYear,
  getReviews,
  setReview,
  getYearlyStatistics,
  postAdditionalUserInfo,
  getAdditionalUserInfo,
  putAdditionalUserInfo,
};

export default requests;
