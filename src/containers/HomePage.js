import React, { Component } from "react";
import { Rectangle, Circle } from "react-shapes";
import l_angle from "../images/homePage/larger-upper-right-corner.svg";
import s_angle from "../images/homePage/smaller-upper-right-corner.svg";
import lower_rect from "../images/homePage/Lower-left-rectangle.svg";
import logo from "../images/homePage/logo.svg";
import people from "../images/homePage/house-mates.png";
import cross from "../images/homePage/cross.svg";
import "./HomePage.css";
import "bootstrap/dist/css/bootstrap.css";
import "typeface-montserrat";

class HomePage extends Component {
  state = { fontFamily: "montserrat", textAlign: "center" };

  styles = {
    square: {
      width: 100,
      height: 100,
      backgroundColor: "red",
    },
  };

  render() {
    return (
      <div>
        <Crosses />
        <Circles />
        <Rectangles />
        <LowerLeftComponent />
        <UpperRightComponent />
        <a href="http://www.freepik.com" style={{ display: "none" }}>
          Designed by studiogstock / Freepik
        </a>
        <img
          src={people}
          style={{
            position: "absolute",
            left: 159,
            top: 214,
            width: 619,
            height: "auto",
          }}
          alt="people on couch."
        />
        <img
          src={logo}
          style={{
            position: "absolute",
            left: 820,
            top: 330,
            width: 799,
            height: "auto",
          }}
          alt="housemeet logo."
        />
        <div className="container">
          <div
            className="row"
            style={{ left: 963, top: 566, position: "absolute" }}
          >
            <div className="col-lg">
              <button
                type="button"
                className="btn button"
                style={{
                  fontFamily: "montserrat",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: 25,
                  textAlign: "center",
                  backgroundColor: "#F1955A",
                  borderRadius: 30,
                  marginRight: 100,
                }}
              >
                Login
              </button>
            </div>

            <button
              type="button"
              className="btn button"
              style={{
                fontFamily: "montserrat",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: 25,
                textAlign: "center",
                backgroundColor: "#5EB4CA",
                borderRadius: 30,
                marginLeft: 100,
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function RenderRectangle(width, height, color) {
  return <Rectangle width={width} height={height} fill={{ color: color }} />;
}

function RenderCircle(radius) {
  return <Circle r={radius} fill={{ color: "#F1955A" }} />;
}

function Crosses() {
  return (
    <div>
      <img
        src={cross}
        style={{ position: "absolute", left: 1107, top: 108 }}
        alt="cross in the upper right hand corner."
      />
      <img
        src={cross}
        style={{ position: "absolute", left: 1177, top: 144 }}
        alt="cross in the upper right hand corner."
      />
      <img
        src={cross}
        style={{ position: "absolute", left: 82, top: 421 }}
        alt="cross in the upper right hand corner."
      />
      <img
        src={cross}
        style={{ position: "absolute", left: 57, top: 542 }}
        alt="cross in the upper right hand corner."
      />
      <img
        src={cross}
        style={{ position: "absolute", left: 735, top: 750 }}
        alt="cross in the upper right hand corner."
      />
    </div>
  );
}

function Circles() {
  return (
    <div>
      <span style={{ position: "absolute", left: 485, top: 858 }}>
        {RenderCircle(17.5)}
      </span>
      <span style={{ position: "absolute", left: 137, top: 515 }}>
        {RenderCircle(14.5)}
      </span>
      <span style={{ position: "absolute", left: 1354, top: 60 }}>
        {RenderCircle(17.5)}
      </span>
      <span style={{ position: "absolute", left: 723, top: 793 }}>
        {RenderCircle(10)}
      </span>
    </div>
  );
}

function Rectangles() {
  return (
    <div>
      <span style={{ position: "absolute", left: 0, top: 0 }}>
        {RenderRectangle(217, 73, "#5EB4CA")}
      </span>
      <span style={{ position: "absolute", left: 0, top: 0 }}>
        {RenderRectangle(217, 73, "#5EB4CA")}
      </span>
      <span style={{ position: "absolute", left: 317, top: 197 }}>
        {RenderRectangle(477, 224, "#F1955A")}
      </span>
      <span style={{ position: "absolute", right: 0, bottom: 0 }}>
        {RenderRectangle(217, 73, "#5EB4CA")}
      </span>
    </div>
  );
}

function UpperRightComponent() {
  return (
    <div>
      <img
        src={s_angle}
        alt="smaller angle in the upper right hand corner."
        className="upperRightHandCorner"
      />
      <img
        src={l_angle}
        alt="larger angle in the upper right hand corner."
        className="upperRightHandCorner"
      />
    </div>
  );
}

function LowerLeftComponent() {
  return (
    <div>
      <img
        src={lower_rect}
        style={{ position: "absolute", left: 108, top: 587 }}
        alt="rectanlge in the lower left hand area."
      />
    </div>
  );
}

export default HomePage;
