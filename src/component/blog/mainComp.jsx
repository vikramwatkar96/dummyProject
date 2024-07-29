import React from "react";
import '../../css_style/mainComp.css'
import MainCompInner from "./mainCompInner";

function MainComp(props) {
    return (
        <div>
            <div className="main_container" style={{ padding: props.padding }}>
                <MainCompInner source="https://multikart-react-reactpixelstrap.vercel.app/assets/images/blog/1.jpg" />
                <MainCompInner source="https://multikart-react-reactpixelstrap.vercel.app/assets/images/blog/2.jpg" />
                <MainCompInner source="https://multikart-react-reactpixelstrap.vercel.app/assets/images/blog/3.jpg" />
                <MainCompInner source="https://multikart-react-reactpixelstrap.vercel.app/assets/images/blog/4.jpg" />
                <MainCompInner source="https://multikart-react-reactpixelstrap.vercel.app/assets/images/blog/5.jpg" />
                <MainCompInner source="https://multikart-react-reactpixelstrap.vercel.app/assets/images/blog/6.jpg" />
            </div>
        </div>
    )
}
export default MainComp;