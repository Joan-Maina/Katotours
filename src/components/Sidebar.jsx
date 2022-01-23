import React from "react";
import Form from "./Form";
import "../styles/Sidebar.css";
import Sideform from "./Sideform";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="transparent"></div>
      <Sideform />
    </div>
  );
}

export default Sidebar;
