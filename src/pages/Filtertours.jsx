import React, { useState } from "react";
import AllTours from "../components/AllTours";
import Sidebar from "../components/Sidebar";
import "../styles/Sidebar.css";

function Filtertours() {
  const [display, setDisplay] = useState(false);
  const handleDisplay = (e) => {
    e.preventDefault();
    console.log("jo");
    setDisplay(true);
  };
  return (
    <>
      <div className="mainfilter">
        <AllTours handledisplay={handleDisplay} />
      </div>
      {display && (
        <div className="sidefilterform">
          <Sidebar />
        </div>
      )}
    </>
  );
}

export default Filtertours;
