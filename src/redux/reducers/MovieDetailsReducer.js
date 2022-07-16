import { MOVIE_DETAILS_ACTIONS } from "./../actions/MoveisDetailsAction";

const initialState = {
  loading: false,
  error: false,
  open: false,
  data: {
    Title: "",
    Year: null,
    Rated: "",
    Runtime: "",
    Genre: "",
    Director: "",
    Actors: "",
    Plot: "",
    Poster: "",
    Ratings: [],
    Metascore: null,
    imdbRating: null,
    imdbVotes: null,
    imdbID: "",
  },
};
export default (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_DETAILS_ACTIONS.MOVIE_DETAILS:
      return {
        ...state,
        loading: true,
        open: true,
      };
    case MOVIE_DETAILS_ACTIONS.MOVIE_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        error: false,
        data: action.payload,
      });
    case MOVIE_DETAILS_ACTIONS.MOVIE_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case MOVIE_DETAILS_ACTIONS.MOVIE_DETAILS_RESET:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
