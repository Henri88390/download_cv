import { Header } from "components";
import React from "react";
import "./App.scss";

const App = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="__polygon-1"></div>
      <div className="__polygon-2"></div>
      <div className="texts">
        <div className="texts__title">WELCOME! I'M HENRI</div>
        <div className="texts__subtitle">I'm a software & web developer</div>
      </div>
    </div>
  );
};

export default App;
