import React from "react";
import "../CSS/Header.css";
import Search from "./Search";
function Header() {
  return (
  
      <header>
        <Search/>
        <button className="find">FIND WEATHER</button>
      </header>
  
  );
}

export default Header;
