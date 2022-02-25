import React from "react";
import "./home-page.css";
import leftArrow from "./images/left-arrow.png";
import rightArrow from "./images/right-arrow.png";


export default function BtnSlider({ direction, moveSlide }) {
//   console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img 
        src={direction === "next" ? rightArrow : leftArrow} 
        alt="img" />
    </button>
  );
}