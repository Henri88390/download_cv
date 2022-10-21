import React from "react";
import "./App.scss";

const App = () => {
  // Function will execute on click of button
  const downloadCv = () => {
    // using Java Script method to get PDF file
    fetch("documents/CV_Frontend_Developer_Henri_Lambert.pdf").then(
      (response) => {
        response.blob().then((blob) => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "CV_Frontend_Developer_Henri_Lambert.pdf";
          alink.click();
        });
      }
    );
  };
  return (
    <div className="home--container">
      <div className="texts">
        <div className="texts--title">WELCOME! I'M HENRI</div>
        <div className="texts--subtitle">I'm a frontend web developer</div>
        <button onClick={downloadCv}>Download my CV</button>
      </div>
    </div>
  );
};

export default App;
