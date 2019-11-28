import React, { Component } from "react";

import "../css/common.css";

/**
 * Price is a slide where the user can choose if they want to find a desktop
 * and/or laptop.
 */
class Price extends Component {
  /**
   * Constructs the Price slide.
   * @param {*} props 
   */
  constructor(props, payload, handler) {
    super(props);

    this.handler = handler;

    this.state = {
      minPrice: payload.minPrice,
      maxPrice: payload.maxPrice,
    }
  }
 
  // TODO -- add the functions to change price mins and maxs

  // TODO -- change the inputs to be based on number!

  /**
   * Renders the options for Price, which should consist of choosing the
   * desktop and the laptop. Whichever is chosen will have a green border
   * surrounding it.
   */
  render() {
    return (
    <div className="input-box"> 
        <input className="price" id="minimum" type="text" name="minimum" placeholder="$"/>
        <input className="price" id="maximum" type="text" name="maximum" placeholder="$$$"/>
    </div>
    );
  }
}

export default Price;
