import "./MovieInfo.css";
import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import { resetState } from "./../../redux/actions/MoveisDetailsAction";
import { connect } from "react-redux/es/exports";
import CircularProgress from "@mui/material/CircularProgress";

const MovieInfo = (props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.resetState}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {props.loading ? (
        <CircularProgress></CircularProgress>
      ) : (
        <div className="movie-info-card">
          <div className="movie-info-body">
            <img src={props.data.Poster} loading="lazy"></img>
            <div className="movie-details">
              <div className="moveis-title">
                <h2>{props.data.Title}</h2>
                <h4>{props.data.Year}</h4>
                <h4>{props.data.Rated}</h4>
                <h4>{props.data.Genre}</h4>
                <h4>{props.data.Director}</h4>
                <h4>{props.data.Plot}</h4>
                <h4>Rating {props.data.imdbRating}</h4>
                <h4>Core: {props.data.Metascore}</h4>
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};
const mapStateToMovieDetails = (states) => {
  return { ...states.moveiDetails };
};

export default connect(mapStateToMovieDetails, { resetState })(MovieInfo);
