import React from "react";
import "../css/NavHeader.css"
import AP from "../AP.png"

const NavHeader = props => {
  return (
    <nav className="navHeader">
     <img src={AP} />
    </nav>
  );
};
export default NavHeader;
