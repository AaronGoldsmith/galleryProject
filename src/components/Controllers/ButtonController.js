import React, { useState } from "react";
import "../../css/button.css";
import Button from "../UI/Button";
export function ButtonController(props) {
  const [toggle, setToggle] = useState(null);
  return (<nav className="filterButton">

    {props.labels.map( 
      (label, i) =>
         (<Button label={label} toggle={toggle} key={i}
              handleClick={e => setToggle(e.currentTarget.id)} />)
          )}
  </nav>);
}
