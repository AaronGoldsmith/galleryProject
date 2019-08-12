import React from "react";
import "../css/NavHeader.css"
import AP from "../AP-white.svg"

const NavHeader = () => 
    <nav className="navHeader">
      <div className="AP-logo-wrap"><img src={AP} alt="Afterpay logo" /></div>
    </nav>

export default NavHeader;
