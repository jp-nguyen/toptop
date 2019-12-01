import React, { Component } from "react";
import "../css/common.css";

class ContentHeader extends Component {
    render() {
        const { title, instructions } = this.props;
        return(
            <header>
                <h1 className="title">{title}</h1>
                <h4 className="instructions">{instructions}</h4>
            </header>
        );
    }
}

export default ContentHeader;