import { combineReducers } from "@reduxjs/toolkit";
import MoviesReducer from "./MoviesReducer";
import MovieDetailsReducer from "./MovieDetailsReducer";
import SearchSuggestReducer from "./SearchSuggestReducer";
export default combineReducers({
  movies: MoviesReducer,
  moveiDetails: MovieDetailsReducer,
  suggesMoveis: SearchSuggestReducer,
});
