import React, { Component } from "react";

import Arrow from "../components/Arrow";
import Dots from "../components/Dots";

/**
 * ProgressBar is a Component that visualizes to the user where they are in the
 * application, with arrows to navigate between slides as well as dots to
 * indicate the progress in the Carousel.
 */
class ProgressBar extends Component {
  /**
   * Sends the user back to the Home page.
   */
  goToHome = () => {
    this.props.history.push("/");
  }

  /**
   * Renders the two arrows and the dots based on the props passed over. The
   * arrows have different functions depending on where the progress is:
   * - if at the start of the progress and left is clicked, the Home page
   *    should be invoked.
   * - if at the end of the progress and right is clicked, the Results page
   *    should be invoked with all the data.
   */
  render() {
    const { count, active, leftClick, rightClick, goToResults } = this.props;
    return (
      <div>
        <Arrow
          direction="left"
          clickFunction={ active > 0 ? leftClick : this.goToHome }
        />
        <Dots count={count} active={active} />
        <Arrow
          direction="right"
          clickFunction={ active < count - 1 ? rightClick : goToResults }
        />
      </div>
    );
  }
}

export default ProgressBar;
