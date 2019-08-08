import React from "react";

import "../css/modal.css";
const Modal = props =>
  props.showing && (
    <div className={`modalItem ${props.scrollable ? "" : "noScroll"}`}>
      <div className="galleryImages">
        <div id="modalHeader">
          <h2 className="modalTitle">{props.showing}
            <span id="x" onClick={props.onClose}> &times; </span>
          </h2>
        </div>

      </div>
    </div>
  );
export default Modal;
