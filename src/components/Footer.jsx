import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <>
      <div className="footermain">
        <div className="topfooter">
          <div className="links">
            <h3>Links</h3>
            <p className="link">Home</p>
            <p className="link">Safaris Tours</p>
            <p className="link">Tour Operators</p>
            <p className="link">KATO Main Website</p>
          </div>
          <div className="contacts">
            <h3>Contacts</h3>
            <p className="contact">
              Tel : 2713386 / 2417864 / 2622961 / 2726517
            </p>
            <p className="contact">Fax : 020 2719226</p>
            <p className="contact">Cell : 0722 434845 / 0713 762076</p>
            <p className="contact">Email : info@katokenya.org</p>{" "}
          </div>
          <div className="addresses">
            <h3>Addresses</h3>

            <p className="adress">Kenya Associate of Tour Operators</p>
            <p className="adress">KATO Place</p>
            <p className="adress">
              (Opposite Shelter Afrique Centre) Upper Hill
            </p>
          </div>
        </div>
        <div className="footer">
          <p> 2020 KATO, All rights reserved.</p>
          <p>Payments Powered by Pesapal</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
