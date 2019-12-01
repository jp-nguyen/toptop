import React, { Component } from "react";

import "../css/common.css";

import Feature from "../components/Feature";

/**
 * Features is a slide where the user can add additional features they want
 * to search for.
 */
class Features extends Component {
  /**
   * Constructs the Features slide.
   * @param {*} props
   */
  constructor(props, payload, handler) {
    super(props);

    this.handler = handler;

    this.state = {
      value: "",
      features: [...payload.features]
    };
  }

  /**
   * Changes the value stored in the state.
   */
  changeValue = ({ target }) => {
    const { newValue } = target;
    this.setState(() => {
      return { value: newValue };
    });
  };

  /**
   * Changes adding/subtracting a feature using the handler.
   */
  changeFeature = value => {
    this.handler("features", value);
  };

  /**
   * Handles submitting
   */
  handleSubmit = e => {
    e.preventDefault();
  };

  /**
   * Renders the options for Features, which should consist of typing in
   * features. Bubbles (?) should pop up indicating what features are looked
   * for.
   */
  render() {
    const features = this.state.features;
    return (
      <div className="features">
        <input
          type="text"
          name="value"
          className="features-input"
          placeholder="e.g. headphone jack"
          onChange={this.changeValue}
          onSubmit={this.handleSubmit}
        />
        <ul>
          {features.map((value, index) => (
            <Feature
              value={value}
              clickFunction={value => this.changeFeature(value)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Features;
