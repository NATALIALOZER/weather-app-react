import axios from "axios";
import React from "react";
import { useState } from "react";
import weather from "../../assets/img/pngwing.com.png";

export default function Main(props) {
  const [temp, setTemp] = useState(null);

  function handleResponse(res) {
    if (res.status !== 200) {
      return;
    }
    setTemp(Math.round(res.data.main.temp));
  }

  const apiKey = "6aab845187b969adecd7c1a5012a8254";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}`;
  axios
    .get(apiUrl)
    .then(handleResponse)
    .catch((err) => console.log(err));

  if (props.city) {
    return (
      <main className="App-main">
        <div className="temperature-box">
          <div className="left">
            <div id="date"></div>
            <div className="value-container">
              <div className="value">
                <span className="temp" id="temperature">
                  {temp}
                </span>
                <span>&#176;</span>
              </div>
              <div>
                <span id="wind-speed"></span>
              </div>
            </div>
            <a id="convert" href="/">
              Convert to Fahrenheit
            </a>
          </div>
          <div className="right">
            <img src={weather} alt="weather" width="100" />
            <span id="weather-des"></span>
          </div>
        </div>
        <div className="forecast-box row">
          <div className="col">
            <div className="WeatherForecastPreview">
              <div className="forecast-time"></div>
              <div className="forecast-temperature">
                <span className="forecast-temperature-max"></span>
                <span className="forecast-temperature-min"></span>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
