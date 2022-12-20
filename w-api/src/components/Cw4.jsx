import React from "react";
import "../CSS/Currentweather.css";
import Clear from "../weather-api/images/weather-icons/clear.svg";
const Cw4=({id,main})=> {
  return (
    <div>
      <div className="displayedcol">
        <span className="">{id}</span>
        <img className="img2" src={Clear} alt="Clear" />
        <span>{main}</span>
      </div>
    </div>
  );
}

export default Cw4;
