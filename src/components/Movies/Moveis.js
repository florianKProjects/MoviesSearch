import "./Moveis.css";
import React, { useEffect } from "react";
import { connect } from "react-redux/es/exports";
import MovieCard from "./../MovieCard/MovieCard";
import MovieInfo from "./../MovieInfo/MovieInfo";
import CircularProgress from "@mui/material/CircularProgress";
import { moviesWishHandler } from "./../../services/MoviesApiService";
let WishMovies = moviesWishHandler._LoadWishMovies();

const Moveis = (props) => {
  useEffect(() => {
    WishMovies = moviesWishHandler._LoadWishMovies();
  }, [props.loading]);

  const ResHandler = () => {
    if (props.data.Search.length != 0 && !props.loading) {
      return (
        <ul className="movies-cards">
          {props.data.Search.map((movie) => (
            <MovieCard
              keyId={movie.imdbID}
              title={movie.Title}
              year={movie.Year}
              imageUrl={movie.Poster}
              isInWishList={WishMovies[movie.imdbID] ? true : false}
            />
          ))}
        </ul>
      );
    }

    if (props.data.Search.length == 0 && !props.loading)
      return (
        <div>
          <h3>NO RESULT</h3>
        </div>
      );
    return (
      <div>
        <CircularProgress />
      </div>
    );
  };

  if (props.data.Search)
    return (
      <div className="movies">
        {ResHandler()}
        <MovieInfo />
      </div>
    );
};
const mapStateToMovies = (states) => {
  return { ...states.movies };
};

export default connect(mapStateToMovies, {})(Moveis);
