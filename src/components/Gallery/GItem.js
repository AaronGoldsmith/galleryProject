import React from "react";
import "./gallery.css";
export const GItem = props => {
  return (
    <div className="gridItem" id={props.label} onClick={props.handleClick}>
        <img src={props.src} alt={"screenshot"} />
      <p id={props.label} className="title">
        {props.label}
      </p>
      {/* title */}
    </div>
  );
};