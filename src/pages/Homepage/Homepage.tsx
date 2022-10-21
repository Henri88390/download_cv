import React, { FC } from "react";
import "./Homepage.scss";

interface HomepageProps {}

function Homepage(props: FC<HomepageProps>) {
  const polandFlag = "/icons/pl.png";
  const frenchFlag = "/icons/fr.png";
  return (
    <div className="homepage-container">
      <div className="text__wrapper">
        <div className="__title">Welcome! I'm Henri Lambert</div>
        <div className="__subtitle">
          A <img src={frenchFlag} alt="French flag" className="__flag" />{" "}
          software & web developer based in{" "}
          <img src={polandFlag} alt="Polish flag" className="__flag" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
