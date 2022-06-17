import { Container } from "@mui/material";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Main />
      </Container>
    </div>
  );
}

export default App;
