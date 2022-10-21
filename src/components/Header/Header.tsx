import React, { FC, useEffect, useRef, useState } from "react";
import "./Header.scss";

interface HeaderProps {}

function Header(props: FC<HeaderProps>) {
  const ref = useRef();
  const [displayMenu, setDisplayMenu] = useState(false);
  const [items] = useState({
    github: { img: "github-logo.png", url: "https://github.com/Henri88390" },
    linkedin: {
      img: "linkedin-logo.webp",
      url: "https://www.linkedin.com/in/henri-lambert-15a525252/",
    },
  });

  function toggleMenu() {
    setDisplayMenu((prevDisplayMenu) => !prevDisplayMenu);
  }

  useEffect(() => {
    const onBodyClick = (event) => {
      // check if element that was clicked is inside of ref'd component
      // if so no action is required from this event listener so exit
      if (ref.current?.contains(event.target)) {
        return;
      }
      // else close the dropdown
      setDisplayMenu(false);
    };

    // add event listener
    document.body.addEventListener("click", onBodyClick);

    // CLEANUP
    // remove event listener
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  function downloadCv() {
    // using Java Script method to get PDF file
    fetch("documents/CV_Frontend_Developer_Henri_Lambert.pdf").then(
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
      <div className="header__left">
        <div className="__download-cv-button" onClick={downloadCv}>
          Download my CV
        </div>
      </div>
      <a href="https://github.com/Henri88390" target="_blank" rel="noreferrer">
        <img src="github-logo.png" alt="GitHub" className="dropdown__img-left"></img>
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
      {/* <div
        ref={ref}
        onMouseEnter={() => setDisplayMenu(true)}
        onMouseLeave={() => setDisplayMenu(false)}
      >
        <div onClick={toggleMenu} className="dropdown__select">
          External links
        </div>

        {displayMenu && (
          <div className="dropdown-container">
            {Object.entries(items).map(([key, value]) => (
              <div key={key} className="dropdown__button">
                <a href={value.url} target="_blank" rel="noreferrer">
                  <img
                    src={value.img}
                    alt={key}
                    className="dropdown__img"
                  ></img>
                </a>
              </div>
            ))}
          </div>
        )}
      </div> */}
    </div>
  );
}

export default Header;
