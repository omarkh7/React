import "./App.css";

import Currentweather from "./components/Currentweather";
import LiveWeather from "./components/LiveWeather";

// "http://api.openweathermap.org/data/2.5/forecast?q="+CityName +"&cnt=8&units=metric&appid="+apikey
// const apikey = "e76027b9a5f5fe4859a5352ed5934bf3"

function App(data) {


  return (
    <div>
   
      <Currentweather />
      <LiveWeather/>
    </div>
  );
}

export default App;
