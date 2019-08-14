import React, {useEffect} from "react";
import "./gallery.css";

function parsePre(pre){
  return pre.split('open?id=').join('file/d/')+'/preview';
}
export const GItem = props => {
  console.log()
  // const post = data[6]
  // console.log(post.split('open?id=').join('file/d/')+'/view')
  return (
    <div className="gridItem" id={props.label} onClick={props.handleClick}>
        <iframe src={parsePre(props.src)} alt={"screenshot"} />
      <p id={props.label} className="title">
        {props.label}
      </p>
      {/* title */}
    </div>
  );
};