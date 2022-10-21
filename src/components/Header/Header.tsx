import React, { FC } from "react";
import "./Header.scss";

interface HeaderProps {}

function Header(props: FC<HeaderProps>) {
  function downloadCv() {
    // using Java Script method to get PDF file
    fetch("documents/cv.pdf").then(
      (response) => {
        response.blob().then((blob) => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "CV_Henri_Lambert.pdf";
          alink.click();
        });
      }
    );
  }

  return (
    <div className="header-container">
      <div className="__download-cv-button" onClick={downloadCv}>
        <img
          src="/icons/cv.png"
          className="__download-cv-icon"
          alt="Download CV icon"
        ></img>
      </div>
      <a href="mailto:henri.lambert9@gmail.com">
        <img src="/icons/mail.png" className="__mailto" alt="Mail to"></img>
      </a>
      <a href="https://github.com/Henri88390" target="_blank" rel="noreferrer">
        <img
          src="github-logo.png"
          alt="GitHub"
          className="dropdown__img-left"
        ></img>
      </a>
      <a
        href="https://www.linkedin.com/in/henri-lambert-15a525252/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="linkedin-logo.webp"
          alt="Linkedin"
          className="dropdown__img"
        ></img>
      </a>
    </div>
  );
}

export default Header;
