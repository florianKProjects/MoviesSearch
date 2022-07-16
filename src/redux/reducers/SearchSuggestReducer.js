import { SUGGEST_MOVEIS } from "./../actions/SearchSuggestAction";

const initialState = {
  loading: false,
  error: false,
  result: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SUGGEST_MOVEIS.SUGGEST_MOVEIS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        error: false,
        result: action.payload,
      });
    case SUGGEST_MOVEIS.SUGGEST_MOVEIS_ERROR:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case SUGGEST_MOVEIS.SUGGEST_MOVEIS_RESET:
      return {
        ...state,
        loading: true,
        error: false,
      };
    default:
      return state;
  }
};
