import React from "react";
import logo from "../../assets/img/git.png";
import Search from "../Search/Search";

export default function Header(props) {
  return (
    <header className="App-header">
      <div className="header_left">
        <div className="boxes" id="city-name">
          City
        </div>
        <div className="boxes" id="source-link">
          <a href="https://github.com/NATALIALOZER/weather-project-js/tree/local">
            <img src={logo} width="40" alt="git_logo" />
          </a>
        </div>
      </div>
      <div className="header_right">
        <button id="current">Current</button>
        <Search onChangeCity={props.onChangeCity} />
      </div>
    </header>
  );
}
