import React from "react";

const Button = ({ ...props }) => (
  <button
    tabIndex={0}
    className={`customBtn  ${props.toggle === props.label ? "active" : "off"}`}
    onClick={props.handleClick}
    id={props.label}
  >
    <span id="btnLabel">{props.label}</span>
  </button>
);
export default Button;
