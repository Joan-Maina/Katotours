import React from "react";
import "../styles/Topoperators.css";
import Button from "./Button";
function Topoperators() {
  const operators = [
    {
      image:
        "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      number: "#01",
      name: "Simba Safaris",
    },
    {
      image:
        "https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      number: "#02",
      name: "Chatu Safaris",
    },
    {
      image:
        "https://images.unsplash.com/photo-1449104532935-d9209c70e2b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      number: "#03",
      name: "Ndovu Safaris",
    },
    {
      image:
        "https://images.unsplash.com/photo-1486688680290-be46662593bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      number: "#04",
      name: "Twiga Safaris",
    },
  ];
  const style = {
    width: "200px",
    margin: "50px",
    fontWeight: "bold",
  };
  return (
    <div className="operatorsmain">
      <h2>Top Rated Tour Operators</h2>

      <div className="operators">
        {" "}
        <i
          className="fa fa-chevron-left fa-x"
          id="sidearrow"
          aria-hidden="true"
          style={{
            border: "2px solid black",
            borderRadius: "50%",
            height: "fit-content",
            padding: "10px",
            marginTop: "50px",
            color: "#C8C8C8",
            borderColor: "#C8C8C8",
          }}
        ></i>
        {operators.map((operator) => (
          <div className="operator">
            <div className="operatorimage">
              <div className="operatorimage">
                {" "}
                <img src={operator.image} />{" "}
              </div>
              <i
                id="logooperators"
                class="fa fa-file-image fa-2x"
                aria-hidden="true"
              ></i>
            </div>

            <p>{operator.name}</p>
            <i class="fa fa-star" id="starreview" aria-hidden="true"></i>
            <i class="fa fa-star" id="starreview" aria-hidden="true"></i>
            <i class="fa fa-star" id="starreview" aria-hidden="true"></i>
            <i class="fa fa-star" id="starreview" aria-hidden="true"></i>
          </div>
        ))}{" "}
        <i
          className="fa fa-chevron-right"
          id="sidearrow"
          aria-hidden="true"
          style={{
            border: "2px solid black",
            borderRadius: "50%",
            height: "fit-content",
            padding: "10px",
            marginTop: "50px",
          }}
        ></i>
      </div>
      <Button text="View All Operators" style={style} />
    </div>
  );
}

export default Topoperators;
