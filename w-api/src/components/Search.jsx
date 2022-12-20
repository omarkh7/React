import React from "react";
import "../CSS/Search.css";

function Search() {
  return (
    <header>
      {" "}
      <input
        className="search"
        type="text"
        placeholder="Type in a City Name"
      ></input>{" "}
    </header>
  );
}

export default Search;
