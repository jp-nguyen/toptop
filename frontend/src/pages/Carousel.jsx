import React, { Component } from "react";

import ProgressBar from "../components/ProgressBar";
import Slide from "../components/Slide";

import Category from "../slides/Category";
import Price from "../slides/Price";
import Manufacturers from "../slides/Manufacturers";
import Features from "../slides/Features";

import "../css/common.css";
import "../css/category.css";

/**
 * An array of slide information which include the following:
 * - title: a question to the user regarding the feature
 * - instructions: specifying what the user should choose
 * - options: the Slide that has all the information
 */
const slides = [
  {
    title: "What are you looking for today?",
    instructions: "Select one or both",
    options: Category
  },
  {
    title: "What's your price range?",
    instructions: "Enter a minimum and/or maximum price",
    options: Price
  },
  {
    title: "What brands do you prefer?",
    instructions: "Select zero, one, or more options",
    options: Manufacturers
  },
  /* Ignoring the features selection
  {
    title: "What other features are you looking for?",
    instructions: "Enter your desired features in the search bar",
    options: Features
  }
  */
];

/**
 * The Carousel page will display the Slides where users will choose
 * different options for their machine. After all the Slides are done, the user
 * will be taken to the Results page with the information stored in this page.
 */
class Carousel extends Component {
  /**
   * Constructs the Carousel page.
   * @param {*} props
   */
  constructor(props) {
    super(props);

    // This state will be updated accordingly based on the choices of the user.
    this.state = {
      activeIndex: 0,
      payload: {
        desktop: false,
        laptop: false,
        minPrice: 0,
        maxPrice: 100000,
        manufacturers: [],
        features: []
      }
    };
  }

  /**
   * Updates a given field inside the payload.
   */
  updatePayload = (name, value) => {
    // Set the state with a function, forcing React to queue the change instead
    // of batching all the changes.
    this.setState(state => ({
      payload: {
        ...state.payload,
        [name]: value
      }
    }));
  };

  /**
   * Updates a given field inside the payload that is an array.
   */
  updateArrayInPayload = (name, value) => {
    // Set the state with a function, forcing React to queue the change instead
    // of batching all the changes.
    this.setState(state => {
      // Get the old array.
      const oldArray = [
        ...(name === "manufacturers"
          ? state.payload.manufacturers
          : state.payload.features)
      ];
      
      // Create a new array that either includes or removes the value.
      const newArray = oldArray.includes(value)
        ? oldArray.filter(i => i !== value)
        : oldArray.concat([value]);

      // Update the payload with the new array.
      return {
        payload: {
          ...state.payload,
          [name]: newArray
        }
      };
    });
  };

  /**
   * Moves to the previous slide.
   */
  previousSlide = () => {
    // Get the activeIndex from the state
    const { activeIndex } = this.state;

    // Update the index to be one less
    const index = activeIndex <= 0 ? 0 : activeIndex - 1;

    // Set the new index
    this.setState({ activeIndex: index });
  };

  /**
   * Moves to the next slide.
   */
  nextSlide = () => {
    // Get the activeIndex from the state
    const { activeIndex } = this.state;

    // Get the last index
    const lastIndex = slides.length - 1;

    // Update the index to be one more
    const index = activeIndex >= lastIndex ? lastIndex : activeIndex + 1;

    // Set the new index
    this.setState({ activeIndex: index });
  };

  /**
   * Sends the user to to the Results page, passing in the payload as the state.
   */
  goToResults = () => {
    this.props.history.push("/results", this.state.payload);
  };

  /**
   * Renders the Carousel, which has all the slides that the users will interact
   * with and choose options from before going to the results.
   */
  render() {
    // Get the index
    const index = this.state.activeIndex;

    // Get the slide information
    const { title, instructions, options } = slides[index];

    // Return the component
    return (
      <div className="container">
        <Slide
          title={title}
          instructions={instructions}
          options={options}
          payload={this.state.payload}
          handler={
            options === Manufacturers || options === Features
              ? this.updateArrayInPayload
              : this.updatePayload
          }
        />
        <ProgressBar
          history={this.props.history}
          count={slides.length}
          active={index}
          leftClick={this.previousSlide}
          rightClick={this.nextSlide}
          goToResults={this.goToResults}
        />
      </div>
    );
  }
}

export default Carousel;
