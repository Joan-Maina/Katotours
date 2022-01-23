import Button from "./Button";
import "../styles/Formandcomments.css";
function Formandcomments() {
  const style = {
    width: "100%",
    marginLeft: "0",
    borderRadius: "5px",
    marginTop: "30px",
  };

  return (
    <div className="formandcomments">
      <div className="sideform">
        <p>
          <b>$3,890 USD</b>/Person Sharing
        </p>
        <form className="sideformmain">
          <p>Request A Quote</p>
          <label>Start Date</label>
          <input type={"text"} placeholder="Tue, Jun 04" disabled />
          <div className="flexible">
            <input type="checkbox" disabled></input>
            <label>My dates are flexible</label>
          </div>

          <label>Travellers</label>
          <input type={"text"} placeholder="2 Travellers" disabled />
          <Button text={"Get A Free Quote"} style={style} />
        </form>
      </div>
      <div className="comments">
        <div className="logo">
          <i
            id="logooperators"
            class="fa fa-file-image fa-2x"
            aria-hidden="true"
          ></i>
          <p>LOGO</p>
        </div>
        <div className="offeredby">
          <div className="ratings">
            {" "}
            <p>Offered By:</p>
            <div>
              <p>
                Kunguru Safaris<br></br>
                <i
                  id="tourreview"
                  class="fa fa-star fa-xs"
                  aria-hidden="true"
                ></i>{" "}
                <i
                  id="tourreview"
                  class="fa fa-star fa-xs"
                  aria-hidden="true"
                ></i>{" "}
                <i
                  id="tourreview"
                  class="fa fa-star fa-xs"
                  aria-hidden="true"
                ></i>{" "}
                <i
                  id="tourreview"
                  class="fa fa-star fa-xs"
                  aria-hidden="true"
                ></i>
                (800 Reviews)
              </p>
            </div>
          </div>

          <p id="viewprofile">View Profile</p>
        </div>
        <div className="maincomment">
          <p>Customer Reviews:</p>
          <div className="comment">
            <div className="user">
              <i class="fa fa-user fa-x" id="usericon" aria-hidden="true"></i>
              <p>
                Jane Doe<br></br>Reviewed: 12 Aug, 2020
              </p>
            </div>
            <p>"Amazing!"</p>
            <i
              id="tourreview"
              class="fa fa-star fa-xs"
              aria-hidden="true"
            ></i>{" "}
            <i id="tourreview" class="fa fa-star fa-xs" aria-hidden="true"></i>{" "}
            <i id="tourreview" class="fa fa-star fa-xs" aria-hidden="true"></i>{" "}
            <i id="tourreview" class="fa fa-star fa-xs" aria-hidden="true"></i>
            <p>
              Elit in aliquet porttitor sed lectus turpis aliquet eu viverra.
              Metus bibendum netus velit elit porta pharetra et egestas!{" "}
              <br></br>
              ...
            </p>
          </div>
          <div className="commentpaginatio">
            <i
              className="fa fa-chevron-left"
              aria-hidden="true"
              style={{
                color: "black",
              }}
            ></i>
            <p>1/5</p>
            <i
              className="fa fa-chevron-right"
              aria-hidden="true"
              style={{
                color: "black",
              }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formandcomments;
