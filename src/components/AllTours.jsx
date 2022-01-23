import React from "react";
import { useHistory } from "react-router-dom"; // version 5.2.0
import Toptours from "./Toptours";
import Header from "./Header";
import Navbar from "./Navbar";
import "../styles/Header.css";
import Footer from "./Footer";

function AllTours({ handledisplay }) {
  const history = useHistory();
  const checkMasai = () => {
    history.push("/masaimara");
  };
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
  const imagerowtwo = [
    {
      image:
        "https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1481464904474-a575a33b44a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1564101160531-4838e8a5f4e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
  ];
  const imagerowthree = [
    {
      image:
        "https://images.unsplash.com/photo-1520323289138-dd84b743fe62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1449104532935-d9209c70e2b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];
  const imagerowfour = [
    {
      image:
        "https://images.unsplash.com/photo-1486688680290-be46662593bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80",
    },
  ];

  return (
    <div className="alltours">
      <Navbar />
      <Header handledisplay={handledisplay} />
      <Toptours checkmasai={checkMasai} images={imagerowone} />
      <Toptours images={imagerowtwo} />
      <Toptours images={imagerowthree} />
      <Toptours images={imagerowfour} />
      <span className="pagination">
        <i
          className="fa fa-chevron-left"
          aria-hidden="true"
          style={{
            border: "2px solid grey",
            borderRadius: "50%",
            height: "fit-content",
            padding: "10px",
            color: "grey",
          }}
        ></i>
        <p className="pagenumber">1</p>
        <p className="pagenumber" id="number2">
          2
        </p>
        <p className="pagenumber">3</p>
        <p className="pagenumber">...</p>
        <p className="pagenumber">10</p>

        <i
          className="fa fa-chevron-right fa-x"
          aria-hidden="true"
          style={{
            border: "2px solid grey",
            borderRadius: "50%",
            height: "fit-content",
            padding: "10px",
            color: "grey",
          }}
        ></i>
      </span>
      <Footer />
    </div>
  );
}

export default AllTours;
