import React from "react";

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
  return (
    <>
      <div>
        <h1>Welcome!</h1>
        <h3>Click on below button to my CV</h3>
        <button onClick={onButtonClick}>Download PDF</button>
      </div>
    </>
  );
};

export default App;
