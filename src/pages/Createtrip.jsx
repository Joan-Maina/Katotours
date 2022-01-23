import React from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import Packages from "../components/Packages";
import Topdestination from "../components/Topdestination";
import Topoperators from "../components/Topoperators";
import Toptours from "../components/Toptours";
import Toptoursheader from "../components/Toptoursheader";

// import "../styles/Numberone.css";

function Createtrip() {
  const imagerowone = [
    {
      image:
        "https://images.unsplash.com/photo-1449104532935-d9209c70e2b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=862&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1564101160531-4838e8a5f4e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
  ];
  const style = {
    fontWeight: "bold",
    marginBottom: "10px",
    borderRadius: "5px",
  };
  return (
    <>
      <div className="mainpage">
        <Navbar />
        <Form />
        <Packages /> <Toptoursheader />
        <Toptours images={imagerowone} />
        <Button text="View All" style={style} />
        <Topdestination />
        <Topoperators />
        <Footer />
      </div>
      <div className="sideform"></div>
    </>
  );
}

export default Createtrip;
