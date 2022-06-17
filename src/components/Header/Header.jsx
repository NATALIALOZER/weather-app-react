import React, { Component } from "react";
import logo from "../../assets/img/git.png";
import search from "../../assets/img/search.png";

export default function Header() {
  return (
    <header className="App-header">
      <div class="header_left">
        <div class="boxes" id="city-name">
          City
        </div>
        <div class="boxes" id="source-link">
          <a href="https://github.com/NATALIALOZER/weather-project-js/tree/local">
            <img src={logo} width="40" alt="git_logo" />
          </a>
        </div>
      </div>
      <div class="header_right">
        <button id="current">Current</button>
        <div class="search-box">
          <form action="" class="form">
            <label for="cname" class="mt-2">
              city:
            </label>
            <input type="text" id="cname" name="cname" />
          </form>
          <button id="searchButton">
            <img
              src={search}
              alt="search_icon"
              width="16"
              height="16"
              class="mb-1"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
