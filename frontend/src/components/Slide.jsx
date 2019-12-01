import React, { Component } from "react";
import ContentHeader from "./ContentHeader";

import "../css/common.css";

/**
 * Slide is a Component representing the Slide with the choices. Each Slide has
 * a title and instructions along with the options for the user to interact 
 * with. Every time a change occurs, the state of the Carousel should update.
 */
class Slide extends Component {
    /**
     * Renders the Slide with a given title, instructions, the options, 
     * the payload, and the function to update the payload.
     */
    render() {
        // Fetch all the parameters from the properties.
        const { title, instructions, options, payload, handler } = this.props;

        // Create an instance of the slide with the payload and the handler.
        let slide = new options(this.props, payload, handler);

        // Make the ContentHeader and the Component with the slide.
        return(
            <div className="slide-container">
                <div className="slide">
                    <ContentHeader title={title} instructions={instructions}/>
                    {slide.render()}
                </div>
            </div>
        );
    }
}

export default Slide;