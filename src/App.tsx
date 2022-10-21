import { Header } from "components";
import { Homepage, Page1 } from "pages";
import React from "react";
import "./App.scss";

const App = () => {
  return (
    <div>
      <Header />
      <Homepage className="homepage" />
      {/* <Page1 /> */}
    </div>
  );
};

export default App;
