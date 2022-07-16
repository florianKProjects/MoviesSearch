import { moveisApiCallService } from "./../../services/MoviesApiService";
export const SUGGEST_MOVEIS = {
  SUGGEST_MOVEIS_SUCCESS: "SUGGEST MOVEIS SUCCESS",
  SUGGEST_MOVEIS_ERROR: "SUGGEST MOVEIS ERROR",
  SUGGEST_MOVEIS_RESET: "SUGGEST MOVEIS RESET",
};

export const searchSuggesMovies = (keyWord) => {
  return async (dispatch) => {
    await moveisApiCallService._suggestSearch(keyWord).then(
      (data) => {
        dispatch(success(data));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function success(data) {
    return { type: SUGGEST_MOVEIS.SUGGEST_MOVEIS_SUCCESS, payload: data };
  }
  function failure(error) {
    return { type: SUGGEST_MOVEIS.SUGGEST_MOVEIS_ERROR, error };
  }
};
export function resetSearchSugges() {
  return { type: SUGGEST_MOVEIS.SUGGEST_MOVEIS_RESET };
}
