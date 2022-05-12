import React from "react";
import "../PhilosopyImg/Pylosopy.scss";
import img from "../../Photos/4.png";
import mor from "../../Photos/mor.png";

export default function Pylosopy() {
  return (
    <div className="photoPylosopy">
      <img className="carPic" src={img} />
      <div className="titlePsi">
        <div className="morDiv">
          <img className="mor" src={mor} />
        </div>
        <p>
          'Little do ye know your own blessedness; for to travel hopefully is a
          better thing than to arrive, and the true success is to labour'
        </p>
        <p className="louis">Robert Louis Stevenson</p>
      </div>
    </div>
  );
}
