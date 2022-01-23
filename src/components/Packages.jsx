import React from "react";
import "../styles/Packages.css";
function Packages() {
  const packages = [
    {
      image:
        "https://images.unsplash.com/photo-1453872302360-eed3c5f8ff66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Honeymoon Specials",
      packages: "1000 Packages",
    },
    {
      image:
        "https://images.unsplash.com/photo-1564101160531-4838e8a5f4e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name: "Mara Migration Offers",
      packages: "200 Packages",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
      name: "City Breaks",
      packages: "120 Packages",
    },
  ];
  console.log(packages);
  return (
    <div className="wholepackages">
      <i
        className="fa fa-chevron-left fa-x"
        id="sidearrow"
        aria-hidden="true"
        style={{
          border: "2px solid black",
          borderRadius: "50%",
          height: "fit-content",
          padding: "10px",
          color: "#C8C8C8",
          borderColor: "#C8C8C8",
        }}
      ></i>{" "}
      <div className="packages">
        {packages?.map((pack) => (
          <div className="package" key={pack.name}>
            <div className="image">
              <img src={pack.image} alt={pack.name} />
            </div>

            <div className="description">
              <p className="packname">{pack.name}</p>
              <p className="packpackage">{pack.packages}</p>
            </div>
          </div>
        ))}
      </div>
      <i
        className="fa fa-chevron-right"
        aria-hidden="true"
        style={{
          border: "2px solid black",
          borderRadius: "50%",
          height: "fit-content",
          padding: "10px",
          marginTop: "130px",
        }}
      ></i>
    </div>
  );
}

export default Packages;
