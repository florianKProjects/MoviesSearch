import "./TopBar.css";
import React, { useState, useEffect } from "react";
import { BiSearch, BiBookHeart } from "react-icons/bi";
import {
  searchMovies,
  insertWishList,
  resetSearchMovies,
} from "./../../redux/actions/moviesSearchAction";
import { connect } from "react-redux/es/exports";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {
  searchSuggesMovies,
  resetSearchSugges,
} from "./../../redux/actions/SearchSuggestAction";

const TopBar = (props) => {
  const [search, setSearch] = useState("");
  const [switchWishList, setswitchWishList] = useState(false);

  useEffect(() => {}, [switchWishList]);

  const createWishList = () => {
    setSearch("");
    setswitchWishList(true);
    props.insertWishList();
  };

  const onInputChange = (event, value, reason) => {
    if (switchWishList) {
      setswitchWishList(false);
    }
    props.resetSearchSugges();
    if (value) {
      setSearch(value);
      props.searchSuggesMovies(value);
      props.searchMovies(event.target.value);
    }
  };
  return (
    <div className="top-bar">
      <div className="seach-bar">
        <BiSearch />
        <Autocomplete
          id="combo-box-demo"
          value={search}
          options={props.result || []}
          onInputChange={onInputChange}
          getOptionLabel={(option) => option}
          style={{ width: 300 }}
          loading={props.loading}
          onChange={(e) => {
            if (!e.target.textContent) {
              props.resetSearchMovies();
            }
            setSearch(e.target.textContent);
          }}
          onSelect={(e) => {
            props.searchMovies(e.target.value);
          }}
          renderInput={(params) => (
            <TextField {...params} label="Combo box" variant="outlined" />
          )}
        />
        <BiBookHeart onClick={createWishList} />
      </div>
      {switchWishList ? (
        <h3>Your WishList</h3>
      ) : (
        <h3>Search result for {search}</h3>
      )}
    </div>
  );
};

const mapStateTosuggesMoveis = (states) => {
  return { ...states.suggesMoveis };
};

export default connect(mapStateTosuggesMoveis, {
  searchMovies,
  insertWishList,
  searchSuggesMovies,
  resetSearchSugges,
  resetSearchMovies,
})(TopBar);
