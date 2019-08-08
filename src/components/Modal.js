import React from "react";

import "../css/modal.css";
const Modal = props =>
  props.showing && (
    <div className={`modalItem ${props.scrollable ? "" : "noScroll"}`}>
      <span id="x" onClick={props.onClose}>
        &times;
      </span>
      <h2>{props.showing}</h2>
      <div className="galleryImages" />
    </div>
  );
export default Modal;
