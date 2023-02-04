import React from "react";
import "./assets/Css/App.css";
import NavBar from "./Components/NavBar/NavBar";
import WeatherPanel from "./Components/WeatherPanel/WeatherPanel";

function App() {
  return (
    <div className="App">
      <NavBar />
      <WeatherPanel />
    </div>
  );
}

export default App;
