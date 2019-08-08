import React from "react";
import "../css/gallery.css";
const GItem = props => {
  return (
    <div className="gItem" id={props.label} onClick={props.handleClick}>
      <div className="gContentWrap">
        <span id="btnLabel" />
        <img className="gContentImg" src={props.src} alt={"screenshot"} />
      </div>
      <p id={props.label} className="title">
        {props.label}
      </p>
      {/* title */}
    </div>
  );
};
export default GItem;
