import React from "react";

/**
 * Renders a number of dots along with the dot that is currently active.
 * @param {count, active } params
 */
const Dots = ({ count, active }) => {
  // Prepare a list
  var dots = [];

  // Add the dots over (with the active being turned on)
  for (var i = 0; i < count; ++i) {
    const className = i === active ? "active" : "";
    dots.push(<li className={className} key={i}></li>);
  }

  // Return the rendered dots
  return (<ul className="progressbar">{dots}</ul>);
};

export default Dots;
