import {
  moveisApiCallService,
  moviesWishHandler,
} from "./../../services/MoviesApiService";

export const SEACH_MOVIES_ACTIONS = {
  SEACH_MOVIES: "SEACH MOVIES",
  SEACH_MOVIES_SUCCESS: "SEACH MOVIES SUCCESS",
  SEACH_MOVIES_NO_RESULT: "SEACH_MOVIES_NOT_RESULT",
  SEACH_MOVIES_ERROR: "SEACH MOVIES ERROR",
  SEACH_MOVIES_RESET: "SEACH MOVIES RESET",

  INSERT_WISH_LIST: "INSERT_WISH_LIST",
  WISH_LIST: "WISH_LIST",
};

export const searchMovies = (query) => {
  return async (dispatch) => {
    dispatch({ type: request() });

    await moveisApiCallService._moviesSearch(query).then(
      (data) => {
        data = JSON.parse(data);
        if (data["Response"] == "False") return dispatch(noResult(data));

        dispatch(success(data));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };
};
function request() {
  return SEACH_MOVIES_ACTIONS.SEACH_MOVIES;
}
function success(data) {
  return { type: SEACH_MOVIES_ACTIONS.SEACH_MOVIES_SUCCESS, payload: data };
}
function noResult(data) {
  return { type: SEACH_MOVIES_ACTIONS.SEACH_MOVIES_NO_RESULT, payload: data };
}
function failure(error) {
  return { type: SEACH_MOVIES_ACTIONS.SEACH_MOVIES_ERROR, error };
}
export function resetSearchMovies() {
  return { type: SEACH_MOVIES_ACTIONS.SEACH_MOVIES_RESET };
}
export const insertWishList = () => {
  let jsonMovies = [];
  let WishMovies = moviesWishHandler._LoadWishMovies();
  for (const movie of Object.values(WishMovies)) {
    jsonMovies.push(JSON.parse(movie));
  }
  return (dispatch) => {
    dispatch({ type: SEACH_MOVIES_ACTIONS.WISH_LIST });
    dispatch({
      type: SEACH_MOVIES_ACTIONS.INSERT_WISH_LIST,
      payload: jsonMovies,
    });
  };
};
