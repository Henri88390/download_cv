import { Footer, Header } from "components";
import { Homepage, Page1 } from "pages";
import React from "react";
import "./App.scss";

const App = () => {
  return (
    <div>
      <Header />
      <Homepage />
      <Page1 />
      <Footer />
    </div>
  );
};

export default App;
