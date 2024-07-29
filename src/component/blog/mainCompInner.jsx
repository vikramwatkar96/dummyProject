import React from "react";
// import { useState, createContext, useContext } from "react";

import '../../css_style/mainComp.css'

function MainCompInner(props) {
    // const height = useContext(compStyle);
    return (
        <div className="main1">
            <div className="col-6 main_image">
                <img src={props.source}></img>
            </div>
            <div className="col-6 main_text">
                <div className="main_text1">
                    <h6 className="main_date">25 January 2018</h6>
                    <a href="#">
                        <h4>
                            you how all this mistaken idea of denouncing pleasure and praising pain was born
                        </h4>
                    </a>
                    <ul className="post-social">
                        <li>Posted By : Admin Admin</li>
                        <li><i class="fa fa-heart"></i> 5 Hits</li>
                        <li><i class="fa fa-comments"></i> 10 Comment</li>
                    </ul>
                    <p>Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
                </div>
            </div>
        </div>


    )
}
export default MainCompInner;