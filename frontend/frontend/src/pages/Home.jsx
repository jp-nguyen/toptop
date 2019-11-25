import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo.png";
import "../css/home.css";

class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="landing-desc">
          <h1 className="landing-header">TopTop</h1>
          <p className="landing-description">
            Transforming the computer search experience with an intuitive and
            user-friendly website to find your next laptop or desktop.
          </p>
          <NavLink to="/category">
            <div className="visitBtn"> 
              Visit
            </div>
          </NavLink>
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
