import React, { useState } from "react";
import ReactDOM from "react-dom";
import GList from "./components/GList";
import Modal from "./components/Modal";
import NavHeader from "./components/NavHeader";
import SearchHeader from "./components/SearchHeader";
function App() {
  const [showModal, setModal] = useState(false);
  const [key, setKey] = useState(null);
  return (
    <div className="App">
      <SearchHeader
        useMag={key && key.length > 0}
        updateVal={input => { setKey(input) }}
      />
      <Modal showing={showModal} onClose={() => setModal(null)} />
      <GList
        searchKey={key}
        openModal={e => {
          setModal(e.currentTarget.id);
        }}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
