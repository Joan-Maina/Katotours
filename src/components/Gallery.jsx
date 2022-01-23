import React from "react";
import "../styles/Gallery.css";
import Button from "./Button";
import moment from "moment";

function Gallery() {
  const d = new Date("2004/06/04");
  const r = new Date("2007/06/07");
  const departing = moment(d).format("ddd, MMM YY");
  const returning = moment(r).format("ddd, MMM YY");
  const style = {
    width: "400px",
    marginLeft: "0",
    marginTop: "40px",
  };
  return (
    <div className="gallerymasai">
      <h1>3 days Masai Mara camping safari</h1>
      <div className="gallery">
        <div className="mainimage">
          <img src="https://images.unsplash.com/photo-1561776267-444911d8a195?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=488&q=80"></img>
        </div>
        <div className="imagesgallery">
          <div className="divone">
            <div className="hotairballoon">
              <img src="https://images.unsplash.com/photo-1519659528534-7fd733a832a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80"></img>
            </div>
            <div className="vehicle">
              <img src="https://images.unsplash.com/photo-1535082623926-b39352a03fb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=891&q=80"></img>
            </div>
          </div>
          <div className="divtwo">
            <div className="antelopes">
              <img src="https://images.unsplash.com/photo-1567608198472-6796ad9466a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"></img>
            </div>
            <div className="partfour">
              <div className="liom">
                <img src="https://images.unsplash.com/photo-1516740445505-4e35c7bd7c49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"></img>
              </div>
              <p className="viewallphotos">View All Photos</p>
            </div>
          </div>
        </div>
      </div>
      <div className="form">
        <form className="formmasaimara">
          {" "}
          <div className="input">
            {" "}
            <label>Departing</label>
            <div className="departing">
              <input
                type="date"
                placeholder="Where to?"
                id="input"
                style={{ border: "none" }}
                minDate={d}
                maxDate={r}
              ></input>
              <i
                className="fa fa-chevron-down fa-x"
                aria-hidden="true"
                id="down"
                style={{ color: "black" }}
              ></i>
            </div>
          </div>
          <div className="input" id="returningmasai">
            {" "}
            <label>Returning</label>
            <div className="returning">
              <input
                type="text"
                id="input"
                style={{ border: "none" }}
                value={returning}
                minDate={d}
                maxDate={r}
                placeholder={returning}
              ></input>

              <i
                className="fa fa-chevron-down fa-x"
                aria-hidden="true"
                id="down"
                style={{ color: "black" }}
              ></i>
            </div>
          </div>{" "}
          <div className="input">
            {" "}
            <label>Travellers</label>
            <div className="travellers">
              <i
                className="fa fa-chevron-down fa-x"
                aria-hidden="true"
                id="down"
                style={{ color: "black" }}
              ></i>
              <select
                name="cars"
                id="input"
                disabled
                style={{ color: "black", fontWeight: "bold" }}
              >
                <option value="volvo">2 Travellers</option>
              </select>
            </div>
          </div>
          <Button text={"Get A Free Quote"} style={style} />
        </form>
      </div>
      <div className="tab">
        <p className="itinerary">Itinerary</p>
        <p>Inclusions</p>

        <p>Gallery</p>
        <p>Offerred by</p>
      </div>
    </div>
  );
}

export default Gallery;
