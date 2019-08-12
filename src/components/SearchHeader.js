import React from "react";
import NavHeader from "./NavHeader";
import { Mag } from "./SVG/Mag"
import { ButtonController } from "./Controllers/ButtonController";
import "../css/header.css";

const labels = ["All results", "Merchants", "Themes", "Tags"];
export const SearchHeader = (props) => {
  return (
    <div className="pageHead">

      <NavHeader />
      {!props.useMag && <Mag />}
      <textarea
        className="textRegion"
        placeholder="Search Projects"
        onChange={e => props.updateVal(e.currentTarget.value)}
      />

      <ButtonController labels={labels} />
      <div className="blankSpace" />
    </div>)
}
