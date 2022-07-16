import axios from "axios";

axios.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.request.use(function (config) {
  return config;
});
const BASE_API = "http://localhost:3001/api";

export const _axios = axios;

export const BASE_MOVIE_API = {
  moviesApI: `${BASE_API}/movies/`,
  movieApI: `${BASE_API}/movie/`,
  suggestApI: `${BASE_API}/tools/`,
};
