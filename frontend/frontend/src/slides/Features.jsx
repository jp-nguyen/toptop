import React, { Component } from "react";

import "../css/common.css";

/**
 * Features is a slide where the user can choose if they want to find a desktop
 * and/or laptop.
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
      desktop: payload.desktop,
      laptop: payload.laptop,
    }
  }

  // TODO - update the features whenever appropriate

  /**
   * Renders the options for Features, which should consist of typing in 
   * features. Bubbles (?) should pop up indicating what features are looked
   * for.
   */
  render() {
    return (
    <div className="features">
        <input type="text" name="features" className="features-input" placeholder="e.g. headphone jack"/>
    </div>
    );
  }
}

export default Features;
