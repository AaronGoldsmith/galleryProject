import React from "react";
import "./gallery.css";
export const GItem = props => {
  return (
    <div className="gridItem" id={props.label} onClick={props.handleClick}>
        <img src={props.src} alt={"screenshot"} />
        <div className="title-wrap">
            <p data-label={props.label}  className="title">
              {props.label}
            </p>
         </div>
    </div>
  );
};