import React, { useRef } from "react";
import search from "../../assets/img/search.png";

export default function Search(props) {
  const inputRef = useRef(null);

  function handleClick() {
    props.onChangeCity(inputRef.current.value);
  }

  return (
    <div className="search-box">
      <form action="" className="form">
        <label htmlFor="cname" className="mt-2">
          city:
        </label>
        <input type="text" name="city" id="city" ref={inputRef} />
      </form>
      <button id="searchButton" onClick={handleClick}>
        <img
          src={search}
          alt="search_icon"
          width="16"
          height="16"
          className="mb-1"
        />
      </button>
    </div>
  );
}
