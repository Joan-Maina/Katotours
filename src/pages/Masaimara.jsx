import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Threeday from "../components/Threeday";
import Button from "../components/Button";
import "../App.css";
function Masaimara() {
  const style = {
    marginLeft: "50px",
    width: "680px",
    marginBottom: "200px",
  };
  return (
    <div className="mainmasai">
      <Navbar />
      <Gallery />
      <Threeday />
      <Button text="YOU HAVE REACHED THE END OF YOUR ADVENTURE" style={style} />
      <Footer />
    </div>
  );
}

export default Masaimara;
