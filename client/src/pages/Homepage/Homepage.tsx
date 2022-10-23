import React, { FC } from "react";
import "./Homepage.scss";

interface HomepageProps {}

function Homepage(props: FC<HomepageProps>) {
  return (
    <div className="homepage-container">
      <div className="text__wrapper">
        <div className="__title">Welcome! I'm Henri</div>
        <div className="__subtitle">A software & web developer</div>
      </div>
    </div>
  );
}

export default Homepage;
