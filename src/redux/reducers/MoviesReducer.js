import { SEACH_MOVIES_ACTIONS } from "../actions/moviesSearchAction";

const initialState = {
  loading: false,
  error: false,
  data: {
    Search: [],
    totalResults: "",
    Response: "",
  },
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SEACH_MOVIES_ACTIONS.SEACH_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case SEACH_MOVIES_ACTIONS.SEACH_MOVIES_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        error: false,
        data: action.payload,
      });
    case SEACH_MOVIES_ACTIONS.SEACH_MOVIES_NO_RESULT:
      return {
        ...state,
        loading: false,
        error: false,
        data: {
          Search: [],
          totalResults: "",
          Response: "True",
        },
      };
    case SEACH_MOVIES_ACTIONS.SEACH_MOVIES_RESET:
      return initialState;
    case SEACH_MOVIES_ACTIONS.WISH_LIST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case SEACH_MOVIES_ACTIONS.INSERT_WISH_LIST:
      return Object.assign({}, state, {
        loading: false,
        error: false,
        data: {
          Search: action.payload,
          totalResults: "",
          Response: "True",
        },
      });
    default:
      return state;
  }
};
