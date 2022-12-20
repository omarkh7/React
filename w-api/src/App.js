import "./App.css";
import Mostlycloudy from "../src/weather-api/images/weather-icons/mostlycloudy.svg";
import Clear from "../src/weather-api/images/weather-icons/clear.svg";

function App() {
  return (
    <div>
      <header>
        <input
          className="search"
          type="text"
          placeholder="Type in a City Name"
        ></input>
        <button className="find">FIND WEATHER</button>
      </header>
      <body>
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
            <div className="displayedcol">
              <span className="">03:00</span>
              <img
                className="img2"
                src={Mostlycloudy}
                alt="mostlycloudy"
              />{" "}
              <span>8°C</span>
            </div>
            <div className="displayedcol">
              <span className="">03:00</span>
              <img
                className="img2"
                src={Mostlycloudy}
                alt="mostlycloudy"
              />{" "}
              <span>8°C</span>
            </div>
            <div className="displayedcol">
              <span className="">03:00</span>
              <img className="img2" src={Clear} alt="Clear" />
              <span>8°C</span>
            </div>
            <div className="displayedcol">
              <span className="">03:00</span>
              <img className="img2" src={Clear} alt="Clear" />
              <span>8°C</span>
            </div>
            <div className="displayedcol">
              <span className="">03:00</span>
              <img className="img2" src={Clear} alt="Clear" />
              <span>8°C</span>
            </div>
            <div className="displayedcol">
              <span className="">03:00</span>
              <img className="img2" src={Clear} alt="Clear" />
              <span>8°C</span>
            </div>
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
        </div>
      </body>
    </div>
  );
}

export default App;
