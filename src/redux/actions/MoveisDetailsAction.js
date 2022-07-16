import { moveisApiCallService } from "./../../services/MoviesApiService";

export const MOVIE_DETAILS_ACTIONS = {
  MOVIE_DETAILS: "MOVIE DETAILS",
  MOVIE_DETAILS_SUCCESS: "MOVIE DETAILS SUCCESS",
  MOVIE_DETAILS_ERROR: "MOVIE DETAILS ERROR",
  MOVIE_DETAILS_RESET: "MOVIE DETAILS RESET",
};

export const searchMovie = (movieId) => {
  return async (dispatch) => {
    dispatch({ type: request() });
    await moveisApiCallService._movieDetails(movieId).then(
      (data) => {
        data = JSON.parse(data);

        dispatch(success(data));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };
  function request() {
    return MOVIE_DETAILS_ACTIONS.MOVIE_DETAILS;
  }
  function success(data) {
    return { type: MOVIE_DETAILS_ACTIONS.MOVIE_DETAILS_SUCCESS, payload: data };
  }
  function failure(error) {
    return { type: MOVIE_DETAILS_ACTIONS.MOVIE_DETAILS_ERROR, error };
  }
};
export function resetState() {
  return { type: MOVIE_DETAILS_ACTIONS.MOVIE_DETAILS_RESET };
}
