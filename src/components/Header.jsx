import React, { useState } from "react";
import "../styles/Header.css";

function Header({ handledisplay }) {
  return (
    <>
      <div className="header">
        <div className="topheader">
          <p>Home</p>
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
          <p>Safaris and Tours</p>
        </div>
        <div className="midheader">
          <p className="filter" onClick={(e) => handledisplay(e)}>
            Filter {"  "}
            <i class="fa fa-bars" aria-hidden="true"></i>
          </p>
          <p>1-10 of 1000 trips, packages and vacations</p>
          <div className="sortheader">
            <label>Sort By</label>
            <select className="selectrange">
              <option>Price: High - Low</option>
              <option>Price: Low - Low</option>
              <option>Highest Rating</option>
            </select>
          </div>
        </div>
        <div className="bottomheader">
          <span>
            <p className="applied">Applied Filters</p>
            <p className="clear">Clear all</p>
          </span>
          <span className="mombasaspan">
            <p>Mombasa</p>
            <p>Jul 6, 2020</p>
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
