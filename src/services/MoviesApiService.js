import { BASE_MOVIE_API, _axios } from "./ConfigService";

export const moveisApiCallService = {
  _moviesSearch,
  _movieDetails,
  _suggestSearch,
};
export const moviesWishHandler = {
  _saveWishMovie,
  _LoadWishMovies,
  _removeWishMovies,
};
function _moviesSearch(query) {
  return _axios.get(`${BASE_MOVIE_API.moviesApI}${query}`).catch((error) => {
    return Promise.reject(error);
  });
}
function _movieDetails(movieId) {
  return _axios.get(`${BASE_MOVIE_API.movieApI}${movieId}`).catch((error) => {
    return Promise.reject(error);
  });
}
function _suggestSearch(query) {
  return _axios.get(`${BASE_MOVIE_API.suggestApI}${query}`).catch((error) => {
    return Promise.reject(error);
  });
}

function _saveWishMovie(movieDetails) {
  localStorage.setItem(movieDetails["imdbID"], JSON.stringify(movieDetails));
}

function _LoadWishMovies() {
  return { ...localStorage };
}
function _removeWishMovies(movieID) {
  window.localStorage.removeItem(movieID);
}
