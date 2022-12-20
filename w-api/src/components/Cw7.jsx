import React from "react";
import "../CSS/Currentweather.css";
import Mostlycloudy from "../weather-api/images/weather-icons/mostlycloudy.svg";

const Cw7=({id,main})=> {
  return (
    <div>
      <div className="displayedcol">
        <span className="">{id}</span>
        <img className="img2" src={Mostlycloudy} alt="mostlycloudy" />{" "}
        <span>{main}</span>
      </div>
    </div>
  );
}

export default Cw7;
