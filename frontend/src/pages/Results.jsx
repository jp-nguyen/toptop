import React, { Component } from "react";

import Arrow from "../components/Arrow";
import Result from "../components/Result";

import Socket from "../utils/Socket";

import "../css/common.css";
import "../css/results.css";

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

    this.state = {
      results: []
    };
  }

  /**
   * Sends the user back to the Home page.
   */
  goToHome = () => {
    this.props.history.push("/");
  };

  async componentDidMount() {
    // Make a call to the backend, and get data.
    try {
      let response = await Socket.POST(this.payload);
      console.log("SUCCESS");
      console.log(response);

      const results = response.products;
      this.setState(state => {
        return { results: results };
      });
    } catch (e) {
      console.log("ERROR");
      console.log(e);
    }
  }

  /**
   * Renders the results received from the call.
   */
  render() {
    // Get the results
    const results = this.state.results;

    // Render the results
    return (
      <div className="results">
          <div className="results-header clearfix">
            <Arrow direction="left" clickFunction={this.goToHome} />
            <h1>Results</h1>
          </div>
          <ul>
            {results.map((value, index) => (
              <Result key={index} value={value}/>
            ))}
          </ul>
      </div>
    );
  }
}

export default Results;
