
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import GList from "./components/Gallery/GList";
import Modal from "./components/Modal";
import SearchHeader from "./components/SearchHeader";
import SheetLoader from "./components/SheetLoader"
// import {SheetRow} from './SheetLoader'
import "./styles.css"
const AXIS ='ROWS' // ROWS or COLUMNS
const API = `https://sheets.googleapis.com/v4/spreadsheets/1GCojJDYutm9jpwb3XjIOfha1-7GZrba2LUZLjU3HzA0/values:batchGet?ranges=A2%3AH&valueRenderOption=FORMATTED_VALUE&majorDimension=${AXIS}&key=AIzaSyBG60vXsc4gWWqPFFFB6MeDaSCuLHdOJus`



function App() {
  const [showModal, setModal] = useState(false);
  const [data, setData] = useState(null)
  const [key, setKey] = useState(null);

  
  return (
    <div className="App">
      <SheetLoader />
      <SearchHeader
        useMag={key && key.length > 0}
        updateVal={input => { setKey(input) }}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
