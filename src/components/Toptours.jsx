import React from "react";
import "../styles/Toptours.css";

function Toptours({ checkmasai, images }) {
  const getaways = [
    {
      name: "3 Days Amboseli Safari",
      tourtype: "Private Tour",
      pricerange: "Luxury",
      offer: "Special Offer",
    },

    {
      name: "3 Days Samburu Camping Safari",
      tourtype: "Shared Tour",
      pricerange: "Mid Range",
      offer: "Best Seller",
    },
    {
      name: "3 Days Masai Mara Camping Safari",
      tourtype: "Shared Tour",
      pricerange: "Budget",
      offer: "Top Rated Operator",
    },
  ];
  return (
    <div className="toptours">
      <div className="campings">
        <i
          className="fa fa-chevron-left"
          aria-hidden="true"
          style={{
            border: "2px solid black",
            borderRadius: "50%",
            height: "fit-content",
            padding: "10px",
            color: "#C8C8C8",
            borderColor: "#C8C8C8",
          }}
        ></i>

        <div className="tileone">
          <div className="imagepart">
            <div className="tourimage">
              <img src={images[0].image} />
            </div>
            <div className="text">
              <div className="textone">
                <p id="tourtype">{getaways[0].tourtype}</p>
                <p id="tourpricerange">{getaways[0].pricerange}</p>
              </div>
              <div className="offerheart">
                <p id="touroffer">{getaways[0].offer}</p>
                <i class="fa fa-heart" id="heartour" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="description">
            <h4 className="tourname">{getaways[0].name}</h4>
            <div className="rating">
              <p>By: Twiga Safaris</p>
              <span>
                <i id="tourreview" class="fa fa-star" aria-hidden="true"></i>
                <i
                  id="tourreview"
                  class="fa fa-star"
                  aria-hidden="true"
                ></i>{" "}
                <i id="tourreview" class="fa fa-star" aria-hidden="true"></i>{" "}
                <i id="tourreview" class="fa fa-star" aria-hidden="true"></i>
                (800 Reviews)
              </span>
              <i class="fa fa-picture-o" aria-hidden="true"></i>
            </div>
            <p>
              <i class="fa fa-check" id="tick" aria-hidden="true"></i>Meals on
              full board basis
            </p>
            <p>
              <i class="fa fa-check" id="tick" aria-hidden="true"></i>Children
              below 2 years stay free of charge
            </p>
            <div className="tourprice">
              <h2>$ 2,170</h2>
              <p id="perperson">per person sharing</p>
            </div>
          </div>
        </div>
        <div className="tiletwo">
          <div className="imagepart">
            <div className="tourimage">
              <img src={images[1].image} />
            </div>
            <div className="text">
              <div className="textone">
                <p id="tourtype">{getaways[1].tourtype}</p>
                <p id="tourpricerange">{getaways[1].pricerange}</p>
              </div>
              <div className="offerheart">
                <p id="touroffer" style={{ marginLeft: "30px" }}>
                  {getaways[1].offer}
                </p>
                <i class="fa fa-heart" id="heartour" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="description">
            <h4 className="tourname">{getaways[1].name}</h4>
            <div className="rating">
              <p>By: Twiga Safaris</p>
              <span>
                <i id="tourreview" class="fa fa-star" aria-hidden="true"></i>{" "}
                <i id="tourreview" class="fa fa-star" aria-hidden="true"></i>{" "}
                <i id="tourreview" class="fa fa-star" aria-hidden="true"></i>{" "}
                <i id="tourreview" class="fa fa-star" aria-hidden="true"></i>
                (800 Reviews)
              </span>
            </div>
            <p>
              <i class="fa fa-check" id="tick" aria-hidden="true"></i>Meals on
              full board basis
            </p>
            <p>
              <i class="fa fa-check" id="tick" aria-hidden="true"></i>Children
              below 2 years stay free of charge
            </p>
            <div className="tourprice">
              <h2>$ 2,170</h2>
              <p id="perperson">per person sharing</p>
            </div>
          </div>
        </div>
        <div className="tilethree">
          <div className="imagepart">
            <div className="tourimage">
              <img src={images[2].image} />
            </div>
            <div className="text">
              {" "}
              <div className="textone">
                <p id="tourtype">{getaways[2].tourtype}</p>
                <p id="tourpricerange">{getaways[2].pricerange}</p>{" "}
              </div>{" "}
              <div className="offerheart">
                <p id="touroffer">{getaways[2].offer}</p>
                <i class="fa fa-heart" id="heartour" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="description">
            <h4 className="tourname" onClick={checkmasai}>
              {getaways[2].name}
            </h4>
            <div className="rating">
              <p>By: Twiga Safaris</p>
              <span>
                <i id="tourreview" class="fa fa-star" aria-hidden="true"></i>{" "}
                <i id="tourreview" class="fa fa-star" aria-hidden="true"></i>{" "}
                <i id="tourreview" class="fa fa-star" aria-hidden="true"></i>{" "}
                <i id="tourreview" class="fa fa-star" aria-hidden="true"></i>
                (800 Reviews)
              </span>
            </div>
            <p>
              <i class="fa fa-check" id="tick" aria-hidden="true"></i>
              Meals on full board basis
            </p>
            <p>
              <i class="fa fa-check" id="tick" aria-hidden="true"></i>Children
              below 2 years stay free of charge
            </p>
            <div className="tourprice">
              <h2>$ 2,170</h2>
              <p id="perperson">per person sharing</p>
            </div>
          </div>
        </div>
        <i
          className="fa fa-chevron-right"
          aria-hidden="true"
          style={{
            border: "2px solid black",
            borderRadius: "50%",
            height: "fit-content",
            padding: "10px",
          }}
        ></i>
      </div>
    </div>
  );
}

export default Toptours;
