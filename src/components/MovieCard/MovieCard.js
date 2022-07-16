import "./MovieCard.css";
import React, { useState, useEffect } from "react";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { searchMovie } from "./../../redux/actions/MoveisDetailsAction";
import { connect } from "react-redux/es/exports";
import { moviesWishHandler } from "./../../services/MoviesApiService";

const MovieCard = ({
  title,
  year,
  imageUrl,
  keyId,
  isInWishList,
  ...props
}) => {
  const [isInWish, setIsInWish] = useState(isInWishList);
  useEffect(() => {}, [isInWish]);
  return (
    <li key={keyId}>
      <figure className="movie-card">
        <img className="movie-img" src={imageUrl} loading="lazy"></img>
        <div className="hover-wrapper">
          <div className="hover-movie-info">
            <div style={{ marginTop: "6px", marginLeft: "6px" }}>
              {isInWish ? (
                <IoIosHeart
                  color="red"
                  onClick={() => {
                    moviesWishHandler._removeWishMovies(keyId);
                    setIsInWish(false);
                  }}
                ></IoIosHeart>
              ) : (
                <IoIosHeartEmpty
                  color="red"
                  onClick={() => {
                    moviesWishHandler._saveWishMovie({
                      title: title,
                      year: year,
                      Poster: imageUrl,
                      imdbID: keyId,
                    });
                    setIsInWish(true);
                  }}
                />
              )}
            </div>
            <div
              className="short-info"
              onClick={() => {
                return props.searchMovie(keyId);
              }}
            >
              <p>{title}</p>
              <p>{year}</p>
            </div>
          </div>
        </div>
      </figure>
    </li>
  );
};
export default connect(null, { searchMovie })(MovieCard);
