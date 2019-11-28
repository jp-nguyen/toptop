import React, { Component } from "react";

import MicrosoftLogo from "../assets/manufacturers/Microsoft.png"
import AppleLogo from "../assets/manufacturers/Apple.png"
import HPLogo from "../assets/manufacturers/HP.png"
import DellLogo from "../assets/manufacturers/Dell.png"
import AcerLogo from "../assets/manufacturers/Acer.png"
import LenovoLogo from "../assets/manufacturers/Lenovo.png"
import ASUSLogo from "../assets/manufacturers/ASUS.png"

import "../css/common.css";

/**
 * An array of brand information that includes the following:
 * - the name of the manufacturer
 * - the logo
 */
const brands = [
  {
    name: "microsoft",
    logo: MicrosoftLogo
  },
  {
    name: "apple",
    logo: AppleLogo
  },
  {
    name: "hp",
    logo: HPLogo
  },
  {
    name: "dell",
    logo: DellLogo
  },
  {
    name: "acer",
    logo: AcerLogo
  },
  {
    name: "lenovo",
    logo: LenovoLogo
  },
  {
    name: "asus",
    logo: ASUSLogo
  },
];

/**
 * Manufacturers is a slide where the user can choose if they want to find a desktop
 * and/or laptop.
 */
class Manufacturers extends Component {
  /**
   * Constructs the Manufacturers slide.
   * @param {*} props 
   */
  constructor(props, payload, handler) {
    super(props);

    this.handler = handler;

    this.state = {
      manufacturers: payload.manufacturers
    }
  }

  // TODO - update the manufacturers whenever appropriate

  /**
   * Renders the options for Manufacturers, which should consist of choosing the
   * brand. Whichever is chosen will have a green border surrounding it.
   */
  render() {
    return (
      <div>
        <div className="grid-container">
          <h1>{brands[0].name}</h1>
        </div>
      </div>
    );
  }
}

export default Manufacturers;
