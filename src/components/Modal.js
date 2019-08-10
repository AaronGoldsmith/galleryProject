import React,{useState, useEffect} from "react";
import {Copy} from "./SVG/Copy"
import "../css/modal.css";

const handleCopy = (e) => {
  const code = document.querySelector('#copy-code-section').textContent;
  const canCopy = document.queryCommandEnabled('copy');
  let textArea = document.createElement("textarea");
  textArea.value = code;
  textArea.select();

  if(canCopy){
   var successful = document.execCommand('copy');
   console.log('success')
   if(successful){
    textArea.remove();
   }
  }
}

const Modal = props => {
   const [hover, setHover] = useState(false);


  return (props.showing && (
    <div className={`modalItem ${props.scrollable ? "" : "noScroll"}`}>
      <div className="galleryImages">

        <div className="screenshot-images">
            <h2 className="modalTitle">{props.showing}
                <span id="x" onClick={props.onClose}> &times; </span>
            </h2>

          <div>
              <img src="https://via.placeholder.com/250 " /> 
              <p>Pre-fix</p>
              <p className="descr"><em>Add your description here</em></p>
          </div>
          <div>
            <img src="https://via.placeholder.com/250 " />
            <p>Post-fix</p>
            <p className="descr"><em>Add your description here</em></p>
          </div>

          <section id="code-section" >
            <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} onClick={handleCopy} >

              <Copy hover={hover} label={"Copy succesful"} />
            </div>
            <code id="copy-code-section">
                { `<section id="code-section" >`}<br/>
                  {`<div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} onClick={handleCopy} > `} <br/>

                    {`<Copy hover={hover}/> `} <br />
              
                  {` </div> `} <br />
           </code> 
         
          </section>

          
        </div>
      </div>
    </div>
  ));
}
export default Modal;
