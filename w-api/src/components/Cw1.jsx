import React from 'react'
import "../CSS/Currentweather.css";
import Mostlycloudy from "../weather-api/images/weather-icons/mostlycloudy.svg";

function Cw1() {
  return (
    <div>
       <div className="displayedcol">
              <span className="">03:00</span>
              <img
                className="img2"
                src={Mostlycloudy}
                alt="mostlycloudy"
              />{" "}
              <span>8°C</span>
            </div>
    </div>
  )
}

export default Cw1
