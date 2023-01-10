import React from "react";
import "../CSS/Currentweather.css";
import Mostlycloudy from "../weather-api/images/weather-icons/mostlycloudy.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";




function Currentweather() {
  const apikey = "e76027b9a5f5fe4859a5352ed5934bf3"

  const [data,setData]=useState({})
  
  const getWetherDetails=(cityName)=>{
    if (!cityName)return
    const apiURL= "http://api.openweathermap.org/data/2.5/weather?q="+cityName +"&cnt=8&units=metric&appid="+apikey
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
    <div>
         <Header  getWetherDetails={getWetherDetails} />
      <div className="displayedcol">
        <img className="img1" src={Mostlycloudy} alt="mostlycloudy" />
        <h2 className="name1">overcast clouds</h2>
        <br></br>
        <br></br>

        <h2 className="name2">
          <span className="name3">Temperature</span>  {data?.main?.temp_min}°C to {data?.main?.temp_max}°C
        </h2>
        <br></br>
        <br></br>

        <h2 className="name2">
          <span className="name3"> Humidity </span> { data?.main?.humidity }<span className="name3"> Pressure </span>{" "}
         {data?.main?.pressure}
        </h2>
        <br></br>
        <br></br>
        <h2 className="name2"></h2>

        <br></br>
        <br></br>
        <div className="displayedrow">
    
        </div>
      </div>
    </div>
  );
}

export default Currentweather;
