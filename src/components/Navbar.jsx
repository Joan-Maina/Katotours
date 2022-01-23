import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logoimage">
        <img
          src="https://images.unsplash.com/photo-1563694983011-6f4d90358083?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          id="logoimage"
        />
      </div>

      <div className="text">
        <p id="text">SAFARI TOURS</p>
        <p id="text">DESTINATIONS</p>
        <p id="text" className="tour">
          TOUR OPERATORS
        </p>
      </div>
      <div className="main">
        <div className="search">
          <i className="fa fa-search fa-x" id="navicon" aria-hidden="true"></i>{" "}
          <p className="navlink">Search</p>
        </div>
        <div className="usd">
          <i className="fa-solid fa-dollar-sign"></i>{" "}
          <div className="usdbottom">
            <p className="navlink">USD</p>
            <i
              className="fa fa-chevron-down fa-x"
              id="navicon"
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <div className="agent">
          {" "}
          <i class="fa fa-user fa-x" id="navicon" aria-hidden="true"></i>
          <p className="navlink">Agent login</p>
        </div>
        <div className="favorites">
          {" "}
          {/* <i className="fa fa-search fa-x" id="navicon" aria-hidden="true"></i>
           */}
          <i class="fa fa-heart" id="navicon" aria-hidden="true"></i>
          <p className="navlink">Favourites</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
