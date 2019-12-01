import React from "react";

import "../css/common.css";
import "../css/results.css";

/**
 * Renders a number of dots along with the dot that is currently active.
 * @param {*} params
 */
const Result = ({ value }) => {
  // Fetch information from the value
  const { customerReviewAverage, name, salePrice, thumbnailImage, url } = value;
  return (
    <li className="result-container">
      <a className="result-link" href={url} target="_blank" rel="noopener noreferrer">
        <img src={thumbnailImage} alt={name} />
        <h1 className="result-text name">{name}</h1>
        <h1 className="result-text review">{customerReviewAverage} Stars</h1>
        <h1 className="result-text price">{salePrice}</h1>
      </a>
    </li>
  );
};

export default Result;
