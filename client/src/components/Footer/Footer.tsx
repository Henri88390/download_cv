import React, { FC } from "react";
import "./Footer.scss";

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div className="footer__wrapper">
    <div className="__footer-line">
      {" "}
      Made by &nbsp;{" "}
      <a
        href="https://www.linkedin.com/in/henri-lambert-15a525252/"
        rel="Linkedin"
        className="__name-link"
        target="__blank"
      >
        Henri Lambert
      </a>
    </div>
    <div className="__footer-line">
      This website was created using &nbsp;
      <a
        href="https://reactjs.org/"
        rel="ReactJS"
        className="__name-link"
        target="__blank"
      >
        React
      </a>
    </div>
  </div>
);

export default Footer;
