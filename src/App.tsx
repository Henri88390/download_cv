import { Footer, Header } from "components";
import { ExperiencesPage, Homepage, Page1 } from "pages";
import React from "react";
import "./App.scss";

const App = () => {
  return (
    <div className="__app">
      <Header />
      <Homepage />
      <Page1 />
      <ExperiencesPage />
      {/* <ContactPage /> */}
      <Footer />
    </div>
  );
};

export default App;
