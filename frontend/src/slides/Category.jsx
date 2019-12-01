import React, { Component } from "react";

import desktopIcon from "../assets/categories/desktopIcon.png";
import laptopIcon from "../assets/categories/laptopIcon.png";

import "../css/common.css";
import "../css/category.css";

/**
 * Category is a slide where the user can choose if they want to find a desktop
 * and/or laptop.
 */
class Category extends Component {
  /**
   * Constructs the Category slide.
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

  /**
   * Switches the flag of desktop.
   */
  changeDesktop = () => {
    const newValue = !this.state.desktop;
    // Invoke the handler.
    this.handler("desktop", newValue);
  }

  /**
   * Switches the flag of laptop.
   */
  changeLaptop = () => {
    const newValue = !this.state.laptop;
    // Invoke the handler.
    this.handler("laptop", newValue);
  }

  /**
   * Renders the options for Category, which should consist of choosing the
   * desktop and the laptop. Whichever is chosen will have a green border
   * surrounding it.
   */
  render() {
    return (
      <div>
        <div className="computer-type">
          <img 
            src={desktopIcon} 
            className= {`desktop-icon ${this.state.desktop ? "chosen" : ""}`} 
            onClick={this.changeDesktop}
            alt="desktop"/>
          <img 
            src={laptopIcon} 
            className= {`laptop-icon ${this.state.laptop ? "chosen" : ""}`} 
            onClick={this.changeLaptop}
            alt="laptop"/>
        </div>
      </div>
    );
  }
}

export default Category;
