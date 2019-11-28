import React, { Component } from "react";

import Arrow from "../components/Arrow";

import Socket from "../utils/Socket";

import "../css/common.css";
import "../css/category.css";

/**
 * The Results page will populate with all the results that were received after
 * completing the Carousel items. This will call our backend endpoint.
 */
class Results extends Component {
  /**
   * Constructs the Result PAge
   * @param {*} props
   */
  constructor(props) {
    super(props);

    // Get the payload passed into the props
    this.payload = this.props.history.location.state;

    // DEBUG: printing
    console.log(this.payload);
  }

  /**
   * Sends the user back to the Home page.
   */
  goToHome = () => {
    this.props.history.push("/");
  };

  /**
   * Renders the results received from the call.
   */
  render() {
    // Make a call to the backend, and get back data.
    const data = Socket.POST(this.payload)
      .then(response => {
        console.log("SUCCESS");
        console.log(response);
        return response;
      })
      .catch(error => {
        console.log("ERROR");
        console.log(error);
      });

    return (
      <div>
        <div>
          <h1>{`${data}`}</h1>
          <Arrow direction="left" clickFunction={this.goToHome} />
        </div>
      </div>
    );
  }
}

export default Results;
