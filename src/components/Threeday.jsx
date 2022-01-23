import React from "react";
import "../styles/Threeday.css";
import Button from "./Button";
import Formandcomments from "./Formandcomments";

function Threeday() {
  const style = {
    backgroundColor: "orange",
    color: "white",
    width: "100%",
    marginLeft: "0",
  };
  return (
    <div className="#F5F5FC">
      <div className="topthree">
        <p>Home</p>
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
        <p>Safaris and Tours</p>
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
        <p className="threeday"> 3 Days Samburu camping safari</p>
      </div>
      <div className="maincontent">
        <div className="whattoexpect">
          <div className="introduc">
            <h2 id="whattoexpect">What To Expect</h2>
            <p>
              Nulla turpis magna blandit diam nulla cras gravida. Sed convallis
              ac eget egestas arcu sagittis, at. Semper facilisi nibh vulputate
              posuere accumsan. Fringilla tristique cras eu varius pellentesque
              lectus massa aliquet. Vitae ultrices id volutpat tellus
              consectetur mauris imperdiet urna. Orci ipsum, tortor et nulla
              consectetur nec justo, felis. Feugiat imperdiet convallis integer
              elementum quisque. Diam volutpat tortor sed neque elementum
              integer ut tempus porta.{" "}
            </p>
          </div>
          <div className="elephants">
            <div className="adventure">
              <Button style={style} text="YOUR ADVENTURE BEGINS" />
              <div className="adventureimage">
                <div className="elephantimage">
                  {/* <i
                    className="fa fa-chevron-left"
                    id="gosideleft"
                    aria-hidden="true"
                  ></i> */}
                  <div className="elephantsmasai">
                    <img
                      src="https://images.unsplash.com/photo-1481464904474-a575a33b44a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                      alt="elephants"
                    />
                  </div>

                  {/* <i
                    className="fa fa-chevron-right"
                    id="gosideright"
                    aria-hidden="true"
                  ></i> */}
                </div>
              </div>
              <h5>1 Night in Location/Destinatiom</h5>
              <p>
                Description: Pretium, nunc, adipiscing pellentesque viverra
                cursus at faucibus. Risus pellentesque montes, sit facilisis
                lorem placerat ultricies donec dignissim. Praesent facilisi
                iaculis gravida purus a, at eu risus nam. Lectus non eget
                pharetra, eu, nibh condimentum. Dictumst lobortis nisl nunc,
                ornare enim morbi pulvinar turpis. Eget elit est aliquet nunc
                diam sollicitudin dis.
              </p>
              <p>
                <b>Accomodation</b> : Lorem ipsum
              </p>
              <p>
                <b>Meals</b> : Lorem ipsum
              </p>
            </div>
          </div>
          <div className="titletwo">
            <p>Day 2: CONTINUE YOUR JOURNEY TO...</p>
          </div>
          <div className="adventure">
            <div className="adventureimage">
              <div className="elephantimage">
                {/* <i
                  className="fa fa-chevron-left"
                  id="gosideleft"
                  aria-hidden="true"
                ></i> */}
                <div className="elephantsmasai">
                  <img
                    src="https://images.unsplash.com/photo-1616128417743-c3a6992a65e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                    alt="elephants"
                  />
                </div>

                {/* <i
                  className="fa fa-chevron-right"
                  id="gosideright"
                  aria-hidden="true"
                ></i> */}
              </div>
            </div>
            <h5>1 Night in Location/Destinatiom</h5>
            <p>
              Description: Pretium, nunc, adipiscing pellentesque viverra cursus
              at faucibus. Risus pellentesque montes, sit facilisis lorem
              placerat ultricies donec dignissim. Praesent facilisi iaculis
              gravida purus a, at eu risus nam. Lectus non eget pharetra, eu,
              nibh condimentum. Dictumst lobortis nisl nunc, ornare enim morbi
              pulvinar turpis. Eget elit est aliquet nunc diam sollicitudin dis.
            </p>
            <p>
              <b>Accomodation</b> : Lorem ipsum
            </p>
            <p>
              <b>Meals</b> : Lorem ipsum
            </p>
          </div>{" "}
          <div className="titletwo">
            <p>Day 4: CONTINUE YOUR JOURNEY TO...</p>
          </div>
          <div className="adventure">
            <div className="adventureimage">
              <div className="elephantimage">
                {/* <i
                  className="fa fa-chevron-left"
                  id="gosideleft"
                  aria-hidden="true"
                ></i> */}
                <div className="elephantsmasai">
                  <img
                    src="https://images.unsplash.com/photo-1550591853-18e1d18765e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
                    alt="elephants"
                  />
                </div>

                {/* <i
                  className="fa fa-chevron-right"
                  id="gosideright"
                  aria-hidden="true"
                ></i> */}
              </div>
            </div>
            <h5>1 Night in Location/Destinatiom</h5>
            <p>
              Description: Pretium, nunc, adipiscing pellentesque viverra cursus
              at faucibus. Risus pellentesque montes, sit facilisis lorem
              placerat ultricies donec dignissim. Praesent facilisi iaculis
              gravida purus a, at eu risus nam. Lectus non eget pharetra, eu,
              nibh condimentum. Dictumst lobortis nisl nunc, ornare enim morbi
              pulvinar turpis. Eget elit est aliquet nunc diam sollicitudin dis.
            </p>
            <p>
              <b>Accomodation</b> : Lorem ipsum
            </p>
            <p>
              <b>Meals</b> : Lorem ipsum
            </p>
          </div>
        </div>
        <Formandcomments />
      </div>
    </div>
  );
}

export default Threeday;
