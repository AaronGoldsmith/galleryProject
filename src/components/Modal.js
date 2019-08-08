import React from "react";

import "../css/modal.css";
const Modal = props =>
  props.showing && (
    <div className={`modalItem ${props.scrollable ? "" : "noScroll"}`}>
      <div className="galleryImages">

        <div className="screenshot-images">
            <h2 className="modalTitle">{props.showing}
                <span id="x" onClick={props.onClose}> &times; </span>
            </h2>

          <div>
              <img src="https://via.placeholder.com/250 " /> 
              <p>Pre-fix</p>
              <p><em>Add your description here</em></p>
          </div>
          <div>
            <img src="https://via.placeholder.com/250 " />
            <p>Post-fix</p>
            <p><em>Add your description here</em></p>

          </div>
          
        </div>
      </div>
    </div>
  );
export default Modal;
