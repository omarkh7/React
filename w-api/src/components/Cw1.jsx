import React from 'react'
import "../CSS/Currentweather.css";
import Mostlycloudy from "../weather-api/images/weather-icons/mostlycloudy.svg";


const Cw1 = ({id,main}) => {
  return (
      <div className="displayedcol">
              <span className="">{id}</span>
              <img
                className="img2"
                src={Mostlycloudy}
                alt="mostlycloudy"
              />{" "}
              <span>{main}</span>
            </div>
  )
}

export default Cw1;


