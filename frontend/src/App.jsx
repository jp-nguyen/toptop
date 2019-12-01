import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Carousel from "./pages/Carousel";
import Results from "./pages/Results";

/**
 * App is the main class that will route the user to the right pages based on
 * the paths. This App should have three pages:
 * - Home
 * - Carousel
 * - Results
 */
class App extends Component {
  /**
   * Renders the application, containing a Switch to reroute based on the path
   * given at the end of the website's url
   */
  render() {
    return (
      <div className="content">
        <Switch>
          <Route path="/results" component={Results} />
          <Route path="/carousel" component={Carousel} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
