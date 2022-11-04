import React from "react";
import "./Modal.scss";

const Modal = ({ children }) => {
  const showHideClassName = "modal display-block";
  return <div className={showHideClassName}> {children}</div>;
};

export default Modal;
