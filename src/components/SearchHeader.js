import React from "react";
import NavHeader from "./NavHeader";
import { Mag } from "./SVG/Mag"
import {ButtonController} from "./Controllers/ButtonController";
import "../css/header.css";

const SearchHeader = props => {
  return (
    <div className="pageHead">
      <NavHeader />

      {/* SHOW magnifying glass */}
      {!props.useMag && <Mag />}
      <textarea
        className="textRegion"
        placeholder={"Search Projects"}
        onChange={e => props.updateVal(e.currentTarget.value)}
      />
      
      <ButtonController labels={["Merchants", "Themes", "Tags", "All results"]} />
      <div className="blankSpace"></div>
    </div>
  );
};
export default SearchHeader;
