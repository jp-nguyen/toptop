import React from "react";
import leftArrow from "../assets/leftArrow.png"
import rightArrow from "../assets/rightArrow.png"

/**
 * Renders an arrow (either left or right) with the given clickFunction.
 * @param {direction, clickFunction } params
 */
const Arrow = ({ direction, clickFunction }) => (
    <div 
        className={`${direction}Arrow`}
        onClick={ clickFunction }>
        <img src={
            direction === "left" ? leftArrow : rightArrow
        } className="arrow" alt={direction}/>
    </div>
);

export default Arrow;