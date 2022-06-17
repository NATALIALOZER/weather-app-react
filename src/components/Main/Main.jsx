import React, { Component } from "react";
import weather from "../../assets/img/pngwing.com.png";

export default function Main() {
  return (
    <main className="App-main">
      <div className="temperature-box">
        <div className="left">
          <div id="date"></div>
          <div className="value-container">
            <div className="value">
              <span className="temp" id="temperature">
                --
              </span>
              <span>&#176;</span>
            </div>
            <div>
              <span id="wind-speed"></span>
            </div>
          </div>
          <a id="convert">Convert to Fahrenheit</a>
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
