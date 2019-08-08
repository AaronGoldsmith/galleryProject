import React from "react";
import NavHeader from "./NavHeader";
import {Mag} from "./SVG/Mag"
import "../css/header.css";

const SearchHeader = props => {
  return (
    <div className="pageHead">
      <NavHeader />
      {/* SHOW magnifying glass */}
     {!props.useMag && <Mag />}
      <textarea
        className="textRegion"
        placeholder={"Search Projects..."}
        onChange={e => props.updateVal(e.currentTarget.value)}
      />
       </div>
  );
};
export default SearchHeader;
