import Button from "./Button";
import "../styles/Formandcomments.css";
function Formandcomments() {
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
          <Button text={"Get A Free Quote"} />
        </form>
      </div>
      <div className="comments">
        <i
          id="logooperators"
          class="fa fa-file-image fa-2x"
          aria-hidden="true"
        ></i>
        <p>Offered By:</p>
        <p>Kunguru Safaris</p>
        <p>(800 Reviews)</p>
        <p>View Profile</p>
        <p>Customer Reviews:</p>
        <p>
          Jane Doe<br></br>Reviewed: 12 Aug, 2020
        </p>
        <p>"Amazing!"</p>
        <p>
          Elit in aliquet porttitor sed lectus turpis aliquet eu viverra. Metus
          bibendum netus velit elit porta pharetra et egestas! <br></br>...
        </p>
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
  );
}

export default Formandcomments;
