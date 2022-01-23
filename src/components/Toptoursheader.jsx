import React from "react";
import "../styles/Toptours.css";

function Toptoursheader() {
  return (
    <div className="toptoursheader">
      <h7 style={{ marginLeft: "40%", fontSize: "30px" }}>Top Tours</h7>
      <div className="tourcategories">
        <p id="safarigetaways">Safari Getaways</p>
        <p>Honeymoon Getaways</p>
        <p>Beach Getaways</p>
        <p>Adventure Getaways</p>
      </div>
    </div>
  );
}

export default Toptoursheader;
