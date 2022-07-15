import React from "react";
import logo from "../../assets/img/git.png";
import Search from "../Search/Search";

export default function Header(props) {
  // const apiKey = "6aab845187b969adecd7c1a5012a8254";
  // let apiUrl = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  // https: axios
  //   .get(apiUrl)
  //   .then(handleResponse)
  //   .catch((err) => console.log(err));

  //function onCurrentTemp() {}

  return (
    <header className="App-header">
      <div className="header_left">
        <div className="boxes" id="city-name">
          City
        </div>
        <div className="boxes" id="source-link">
          <a href="https://github.com/NATALIALOZER/weather-app-react">
            <img src={logo} width="40" alt="git_logo" />
          </a>
        </div>
      </div>
      <div className="header_right">
        <button id="current" onClick={props.onCurrentTemp}>
          Current
        </button>
        <Search onChangeCity={props.onChangeCity} />
      </div>
    </header>
  );
}
