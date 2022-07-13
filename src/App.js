import { Container } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [city, setCity] = useState("");

  const handleSearch = (val) => {
    setCity(val);
  };

  return (
    <div className="App">
      <Container>
        <Header onChangeCity={handleSearch} />
        <Main city={city} />
      </Container>
    </div>
  );
}

export default App;
