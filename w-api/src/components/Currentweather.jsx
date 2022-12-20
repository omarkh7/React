import React from "react";
import "../CSS/Currentweather.css";
import Mostlycloudy from "../weather-api/images/weather-icons/mostlycloudy.svg";
import Cw1 from "./Cw1";
import Cw2 from "./Cw2";
import Cw3 from "./Cw3";
import Cw4 from "./Cw4";
import Cw5 from "./Cw5";
import Cw6 from "./Cw6";
import Cw7 from "./Cw7";
import {weather} from "./Data";

function Currentweather() {
  return (
    <div>
      <div className="displayedcol">
        <img className="img1" src={Mostlycloudy} alt="mostlycloudy" />
        <h2 className="name1">overcast clouds</h2>
        <br></br>
        <br></br>

        <h2 className="name2">
          <span className="name3">Temperature</span> 10° to 11°C
        </h2>
        <br></br>
        <br></br>

        <h2 className="name2">
          <span className="name3"> Humidity</span> 78%<span className="name3"> Pressure</span>{" "}
          1008.48
        </h2>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="displayedrow">
          <Cw1 id={weather[1].id} main={weather[1].main} />
          <Cw2 id={weather[1].id} main={weather[1].main}/>
          <Cw3 id={weather[0].id} main={weather[0].main}/>
          <Cw4 id={weather[0].id} main={weather[0].main}/>
          <Cw5 id={weather[0].id} main={weather[0].main}/>
          <Cw6 id={weather[0].id} main={weather[0].main}/>
          <Cw7 id={weather[1].id} main={weather[1].main}/>
        </div>
      </div>
    </div>
  );
}

export default Currentweather;
