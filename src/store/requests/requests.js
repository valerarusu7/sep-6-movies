const API_KEY = "e453502d7e2f31ded447961d9d1f121c";

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
  return `/network/${id}?api_key=${API_KEY}`;
}

function fetchNetworkMovies(id) {
  return `/discover/movie?api_key=${API_KEY}&with_networks=${id}`;
}

function fetchNetworkTvShows(id) {
  return `/discover/tv?api_key=${API_KEY}&with_networks=${id}`;
}

function querySearch(text, year) {
  if (year) {
    return `search/movie?api_key=${API_KEY}&language=en-US&query=${text}&page=1&include_adult=false&year=${year}`;
  } else {
    return `search/movie?api_key=${API_KEY}&language=en-US&query=${text}&page=1&include_adult=false`;
  }
}

function addCompareMovie(id) {
  return `/compare?movie_id=${id}`;
}

function getBoxOfficeByYear(year) {
  return `/box-offices?year=${year}`;
}
function getYearlyStatistics() {
  return `/box-office-total?fbclid=IwAR34Dn6THLxjau6comG_6ZJCWnlJqTRTbdPMdGGrQqPUATxiXTHh7LnPgJI`;
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
  getYearlyStatistics
};

export default requests;
