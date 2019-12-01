import React from "react";

import "../css/common.css";
import "../css/features.css";

/**
 * Renders a component representing a feature bubble
 * @param {*} params
 */
const Feature = ({ target }) => {
  const { value, clickFunction } = target;
  return (
    <div className="feature">
        <button className="button" onClick={clickFunction}>{value}</button>
    </div>
  );
};


export default Feature;
