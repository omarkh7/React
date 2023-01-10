import React from "react";
import { useState } from "react";
import "../CSS/Header.css";
function Header({getWetherDetails}) {

 const [inputCity, setInputCity]=useState("")

  const handleChangeInput =(e)=>{
setInputCity(e.target.value)
  }

const HandleSearch =()=>{
  getWetherDetails(inputCity)
}


  return (
  
      <header>
        {" "}
      <input
        className="search"
        type="text"
        placeholder="Type in a City Name"
        value={inputCity}
        onChange={handleChangeInput}
      ></input>{" "}
        <button className="find" onClick={HandleSearch}>FIND WEATHER</button>
      </header>
  
  );
}

export default Header;
