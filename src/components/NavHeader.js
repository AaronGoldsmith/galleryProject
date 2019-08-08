import React from "react";
import "../css/NavHeader.css"
import AP from "../AP.png"

const NavHeader = props => {
  return (
    <nav className="navHeader">
      <div className="AP-logo-wrap"><img src={AP} /></div>
    </nav>
  );
};
export default NavHeader;
