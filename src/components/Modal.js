import React,{useState} from "react";
import {Copy} from "./SVG/Copy";
import "../css/modal.css";

const Modal = props => {
   const [hover, setHover] = useState(false);

   function handleCopy(e){
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

  return (
    
    <div className={`modalItem ${props.scrollable ? "" : "noScroll"} ${props.showing ?'show':'hide'} `} >
      <div className="galleryImages" >
      <span id="x" onClick={props.onClose} > &times; </span>

        <div className="screenshot-images" >
          <h2 className="modalTitle"> {props.showing} </h2>



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
              <Copy hover={hover} label={"Copy succesful"} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} onClick={handleCopy} />
            <code id="copy-code-section" />
                   
          </section>

          
        </div>
      </div>
    </div>
  );
}
export default Modal;
