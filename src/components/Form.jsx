import React, { useState } from "react";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/Form.css";

function Form() {
  const [exactdate, setExactdate] = useState(false);

  const d = new Date("2004/06/04");
  const r = new Date("2007/06/07");
  const departing = moment(d).format("ddd, MMM YY");
  const returning = moment(r).format("ddd, MMM YY");
  const dateFocus = (e) => {
    e.preventDefault();
    console.log("joan");
    e.target.type = "date";
    e.target.value = { returning };
  };
  const [startDate, setStartDate] = useState(new Date("2004/06/04"));
  const [endDate, setEndDate] = useState(new Date("2004/06/07"));

  return (
    <div className="mainform">
      <div className="background">
        <img
          src="https://images.unsplash.com/photo-1518459384564-ecfd8e80721f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=848&q=80"
          alt="smh"
          className="formbackground"
        />
      </div>
      <div className="formdivi">
        <form className="formdiv">
          <h2 id="formtitle">Create your trip</h2>

          <div className="inputs">
            <div className="top">
              <div className="input" id="destination">
                {" "}
                <label>Select Destination(s)</label>
                <div className="destination">
                  {" "}
                  <input
                    type="text"
                    placeholder="Where to?"
                    id="destinationinput"
                    disabled
                  ></input>
                  <i
                    className="fa fa-chevron-down fa-x"
                    aria-hidden="true"
                    id="down"
                    style={{ color: "black" }}
                  ></i>
                </div>
              </div>
              <div className="input">
                {" "}
                <label>Departing</label>
                <div className="departing">
                  <input
                    type="date"
                    placeholder="Where to?"
                    id="input"
                    style={{ border: "none" }}
                    onFocus={(e) => dateFocus(e)}
                    onChange={(e) => (e.target.placeholder = { returning })}
                    {...(!exactdate && { disabled: true })}
                    onClick={() => console.log("o")}
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
              <div className="input">
                {" "}
                <label>Returning</label>
                <div className="returning">
                  <input
                    type="text"
                    id="input"
                    onFocus={(e) => dateFocus(e)}
                    {...(!exactdate && { disabled: true })}
                    onChange={(e) => (e.target.placeholder = { returning })}
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
              </div>
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
              <button className="createtrip" disabled>
                Create Trip
              </button>
            </div>
            <div className="middle">
              <input
                type="checkbox"
                onChange={() => setExactdate(true)}
                {...(exactdate && { disabled: true })}
              ></input>{" "}
              <label>I have exact dates</label>
            </div>
            <div className="bottom">
              <div className="transport">
                <input type="checkbox" disabled></input>
                <label>Add transport</label>
              </div>
              <div className="accomodation">
                <input type="checkbox" disabled></input>
                <label>Add accomodation</label>{" "}
              </div>
              <div className="activity">
                <input type="checkbox" disabled></input>
                <label>Add activity</label>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* <DatePicker
        selected={startDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        onChange={(date) => setStartDate(date)}
      />
      <DatePicker
        selected={startDate}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        maxDate={startDate}
        onChange={(date) => setEndDate(date)}
      /> */}
    </div>
  );
}

export default Form;
