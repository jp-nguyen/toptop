import React, { Component } from "react";
//import { NavLink } from "react-router-dom";

import logo from "../assets/logo.png";
import "../css/home.css";

/**
 * The Home page introduces the user to the product and presents a button that
 * leads to the Carousel page for features.
 */
class Home extends Component {
  state = {};

  /**
   * Renders the Home page, which contains descriptions and logos of our
   * product along with a button that links them to the Carousel page.
   */
  render() {
    return (
      <div>
        <div className="landing-desc">
          <h1 className="landing-header">TopTop</h1>
          <p className="landing-description">
            Transforming the computer search experience with an intuitive and
            user-friendly website to find your next laptop or desktop.
          </p>
          <a href="/carousel" className="nav-link">
            <div className="visitBtn"> 
              Visit
            </div>
          </a>
        </div>
        <div className="landing-logo">
          <img className="logo" src={logo} alt="Half Stack Logo" />
          <p className="credit">created by:</p>
          <p className="team-name">Half Stack</p>
        </div>
      </div>
    );
  }
}

export default Home;
