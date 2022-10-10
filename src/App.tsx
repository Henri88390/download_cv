import React from "react";
import "./App.scss";

const App = () => {
  // Function will execute on click of button
  const onButtonClick = () => {
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
  let className = "home-container";
  let classNameText = "texts";
  return (
    <div className={className}>
      <div className={classNameText}>
        <div>WELCOME! I'M HENRI</div>
        <div className="texts-2">I'm a frontend web developer</div>
        <div className="buttons">
          <button onClick={onButtonClick}>Download my CV</button>{" "}
          <a href="www.google.fr">
            <button>More about me</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
