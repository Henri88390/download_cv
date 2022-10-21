import React, { FC } from "react";
import "./Footer.scss";

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div className="footer__wrapper">
    Made by &nbsp;
    <a
      href="https://www.linkedin.com/in/henri-lambert-15a525252/"
      rel="Linkedin"
      className="__name-link"
    >
      Henri Lambert
    </a>
  </div>
);

export default Footer;
