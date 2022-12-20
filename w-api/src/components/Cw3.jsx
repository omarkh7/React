import React from "react";
import "../CSS/Currentweather.css";
import Clear from "../weather-api/images/weather-icons/clear.svg";
function Cw3() {
  return (
    <div>
      <div className="displayedcol">
        <span className="">03:00</span>
        <img className="img2" src={Clear} alt="Clear" />
        <span>8°C</span>
      </div>
    </div>
  );
}

export default Cw3;
