import React from "react";
import "./NavBar.css";

import SearchBar from "../SearchBar/SearchBar";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1" id="brand">
        Music Library
      </span>
      <SearchBar filterSongs={props.filterSongs} />
    </nav>
  );
};

export default NavBar;
