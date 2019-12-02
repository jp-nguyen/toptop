import React, { Component } from "react";

import "../css/common.css";
import "../css/price.css";

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
 
  /**
   * Updates the given price.
   */
  changePrice = ({ target }) => {
    const { name, value } = target;
    // Invoke the handler
    this.handler(name, parseInt(value, 10));
  };


  /**
   * Renders the options for Price, which should consist of choosing the
   * desktop and the laptop. Whichever is chosen will have a green border
   * surrounding it.
   */
  render() {
    return (
    <div className="input-box"> 
        <input 
          className="input price" 
          type="text" 
          name="minPrice" 
          placeholder="$"
          onChange={this.changePrice}/>
        <input 
          className="price" 
          type="text" 
          name="maxPrice" 
          placeholder="$$$"
          onChange={this.changePrice}/>
    </div>
    );
  }
}

export default Price;
