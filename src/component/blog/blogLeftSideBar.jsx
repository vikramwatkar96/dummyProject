import React from "react";
import '../../css_style/blogs.css'
import Nav1 from "./nav1";
import SideBar from "./sideBar";
import MainComp from "./mainComp";


function BlogLeftSideBar() {
    return (
        <div>
            <div>
                <Nav1 />
            </div>
            <div className="leftSideBarContainer">
                <div className="col-sm-3 leftSideBar">
                    <SideBar />
                </div>
                <div className="col-sm-9 leftSideBarContent">
                    <MainComp />
                </div>
            </div>



            {/* <BlogDetails/> */}
        </div>
    )
}
export default BlogLeftSideBar;