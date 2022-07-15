import { Container } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [city, setCity] = useState("");
  const [locationData, setLocation] = useState({ lat: null, lon: null });

  const handleSearch = (val) => {
    setCity(val);
  };

  const onCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  };

  return (
    <div className="App">
      <Container>
        <Header onChangeCity={handleSearch} onCurrentTemp={onCurrentLocation} />
        <Main city={city} location={locationData} />
      </Container>
    </div>
  );
}

export default App;
