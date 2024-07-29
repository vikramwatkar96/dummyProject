import React from "react";
import '../../css_style/blogs.css'
import Nav1 from "./nav1";
import SideBar from "./sideBar";
import MainComp from "./mainComp";
// import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

// const compStyle = createContext()


function BlogRightSideBar() {
    // const [height, setHeight] = useState("200px");
    return (
        <div>
            {/* // <compStyle.Provider value={height}> */}
            <div>
                <Nav1 />
            </div>
            <div className="leftSideBarContainer">
                <div className="col-sm-9 rightSideBarContent">
                    <MainComp />
                </div>
                <div className="col-sm-3 rightSideBar">
                    <SideBar />
                </div>

            </div>



            {/* <BlogDetails/> */}

            {/* </compStyle.Provider> */}
        </div>
    )
}
export default BlogRightSideBar;