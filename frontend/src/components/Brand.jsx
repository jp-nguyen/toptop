import React, { Component } from "react";

import "../css/common.css";

/**
 * Brand is a Component representing a Brand in the Manufacturers Slide. A Brand
 * consists of the logo and value that will be updated, and they will have a
 * border if "active".
 */
class Brand extends Component {
    /**
     * Constructs a Brand component. Also keeps the name and the clickFunction
     * @param {'*'} props 
     */
    constructor(props) {
        super(props);
        this.name = this.props.name;
        this.clickFunction = this.props.clickFunction;
    }

    /**
     * Handles click by passing through the name
     */
    handleClick = () => {
        this.clickFunction(this.name);
    }

    /**
     * Renders the Brand with the given name and logo.
     */
    render() {
        const { name, logo, chosen } = this.props;
        const className = "brand" + (chosen ? " chosen" : "");
        return(
            <div className={className}>
                <span className="helper"></span>
                <img 
                    src={logo} 
                    value={name}
                    alt={name}
                    onClick={this.handleClick}/>
                <span className="helper"></span>
            </div>
        );
    }

}


export default Brand;