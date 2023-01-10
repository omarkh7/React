import React from "react";
import "../CSS/Currentweather.css";
import Mostlycloudy from "../weather-api/images/weather-icons/mostlycloudy.svg";

import { useEffect, useState } from "react";
import axios from "axios";




function LiveWeather() {


// "http://api.openweathermap.org/data/2.5/forecast?q="+CityName +"&cnt=8&units=metric&appid="+apikey
// const apikey = "e76027b9a5f5fe4859a5352ed5934bf3"
const apikey = "e76027b9a5f5fe4859a5352ed5934bf3"

const [data,setData]=useState({})

const getWetherDetails=(cityName)=>{
  if (!cityName)return
  const apiURL= "http://api.openweathermap.org/data/2.5/forecast?q="+cityName +"&cnt=8&units=metric&appid="+apikey
  axios.get(apiURL).then((res)=>{
    console.log("resposne",res.data)
    setData(res.data)
  }).catch((err)=>{
    console.log("err",err)
  })
}
useEffect(()=>{
getWetherDetails("beirut")
}, [])







  return (
    <div className="displayedrow">
      <div className="displayedcol">
        <span className="name4">1:00 pm</span>
        <br></br>
        <img className="img2" src={Mostlycloudy} alt="mostlycloudy" />{" "}
        <br></br>
        <span className="name4"> 20°C</span>
      </div>
      <div className="displayedcol">
        <span className="name4">1:00 pm</span>
        <br></br>
        <img className="img2" src={Mostlycloudy} alt="mostlycloudy" />{" "}
        <br></br>
        <span className="name4"> 20°C</span>
      </div>
      <div className="displayedcol">
        <span className="name4">1:00 pm</span>
        <br></br>
        <img className="img2" src={Mostlycloudy} alt="mostlycloudy" />{" "}
        <br></br>
        <span className="name4"> 20°C</span>
      </div>
      <div className="displayedcol">
        <span className="name4">1:00 pm</span>
        <br></br>
        <img className="img2" src={Mostlycloudy} alt="mostlycloudy" />{" "}
        <br></br>
        <span className="name4"> 20°C</span>
      </div>
      <div className="displayedcol">
        <span className="name4">1:00 pm</span>
        <br></br>
        <img className="img2" src={Mostlycloudy} alt="mostlycloudy" />{" "}
        <br></br>
        <span className="name4"> 20°C</span>
      </div>
      <div className="displayedcol">
        <span className="name4">1:00 pm</span>
        <br></br>
        <img className="img2" src={Mostlycloudy} alt="mostlycloudy" />{" "}
        <br></br>
        <span className="name4"> 20°C</span>
      </div>
      <div className="displayedcol">
        <span className="name4">1:00 pm</span>
        <br></br>
        <img className="img2" src={Mostlycloudy} alt="mostlycloudy" />{" "}
        <br></br>
        <span className="name4"> 20°C</span>
      </div>
   
    
    </div>
  );
}

export default LiveWeather;
