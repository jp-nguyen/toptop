import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Category from "./pages/Category";

class App extends Component {
  // The "page" will change in this component, so we add a Route and path for
  // every page. This will change the page based on the url we give it.

  // To add a path, add another Route like the following:
  // <Route path="/page-name-here" component={component-here} />

  // The state of all the choices the users make should propagate all the way
  // up to here, so we will handle that accordingly as well.
  render() {
    return (
      <div className="content">
        <Switch>
          <Route path="/category" component={Category} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
