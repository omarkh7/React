import React from 'react';
import "../CSS/Currentweather.css";
import Mostlycloudy from "../weather-api/images/weather-icons/mostlycloudy.svg";
import Cw1 from './Cw1';
import Cw2 from './Cw2';
import Cw3 from './Cw3';
import Cw4 from './Cw4';
import Cw5 from './Cw5';
import Cw6 from './Cw6';
import Cw7 from './Cw7';

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
            <span> Humidity</span> 78%<span className="name3"> Pressure</span>{" "}
            1008.48
          </h2>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="displayedrow">
           <Cw1/>
            <Cw2/>
         <Cw3/>
         <Cw4/>
         <Cw5/>
         <Cw6/>
         <Cw7/>
            
            
            
            
          </div>
        </div>
    </div>
  )
}

export default Currentweather;
