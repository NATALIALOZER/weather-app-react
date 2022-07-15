import axios from "axios";
import React from "react";
import { useState } from "react";
import weather from "../../assets/img/pngwing.com.png";

export default function Main(props) {
  const [temp, setTemp] = useState(null);
  const [response, setRes] = useState(null);

  function handleResponse(res) {
    if (res.status !== 200) {
      return;
    }
    console.log(res.data.main.temp !== response);
    if (res.data.main.temp !== response) {
      setTemp(Math.round(res.data.main.temp));
    }
    setRes(res.data.main.temp);
  }

  function onTempConvert(event) {
    event.preventDefault();
    if (event.target.innerHTML === "Convert to Fahrenheit") {
      setTemp(Math.round((temp * 9) / 5 + 32));
      event.target.innerHTML = "Convert to Celsium";
    } else {
      setTemp(Math.round(((temp - 32) * 5) / 9));
      event.target.innerHTML = "Convert to Fahrenheit";
    }
  }

  const apiKey = "6aab845187b969adecd7c1a5012a8254";
  let apiUrl = props.location
    ? `https://api.openweathermap.org/data/2.5/weather?lat=${props.location.lat}&lon=${props.location.lon}&appid=${apiKey}&units=metric`
    : `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios
    .get(apiUrl)
    .then(handleResponse)
    .catch((err) => console.log(err));

  if (props.city || props.location.lat) {
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
            <a id="convert" href="/" onClick={onTempConvert}>
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
