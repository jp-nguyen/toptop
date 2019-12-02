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

  // Getting the number of starts from the customerReviewAverage
  var review = "";
  switch (customerReviewAverage) {
    case null:
    case 0:
      review = "No stars";
      break;
    case 1:
      review = "1 star";
      break;
    default:
      review = `${customerReviewAverage} stars`;
  }

  // Return a Result entry
  return (
    <li>
      <div className="result-container">
        <a
          className="result-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="result-text image">
            <img src={thumbnailImage} alt={name} />
          </div>
          <h1 className="result-text name">{name}</h1>
          <h1 className="result-text review">{review}</h1>
          <h1 className="result-text price">${salePrice}</h1>
        </a>
      </div>
    </li>
  );
};

export default Result;
