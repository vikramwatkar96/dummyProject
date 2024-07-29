import React from "react";
import '../css_style/button.css';


function Button(props) {
    return (
        <div className="buttondiv">
            <a class="btn1 btn-solid1" href="/left-sidebar/collection">{props.title} </a>
        </div>
    )
}
export default Button;