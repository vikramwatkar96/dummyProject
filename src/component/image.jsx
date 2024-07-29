import React from "react";
import '../css_style/image.css';

function Image(props) {
    return (
        <img src={props.path} className="allImage"></img>
    )
}

export default Image;