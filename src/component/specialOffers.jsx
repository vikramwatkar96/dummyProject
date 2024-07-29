import React from "react";
import '../css_style/specialOffer.css'

function SpecialOffer() {
    return (
        <div>
            <section className="main">
                <div className="container">
                    <div className="partition2 row">
                        <div className="col-md-6">
                            <a href="/left-sidebar/collection">
                                <div className="collection-banner p-right text-center imagediv">
                                    <img src="https://multikart-react-reactpixelstrap.vercel.app/_next/static/media/sub-banner1.5d5f9c6f.jpg" alt="" class="img-fluid media " />
                                    <div className="contain-banner">
                                        <div className="inner">
                                            <h4 className="h44">10% OFF </h4>
                                            <h1 className="h11">MEN</h1>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6">
                            <a href="/left-sidebar/collection">
                                <div className="collection-banner p-right text-center imagediv">
                                    <img src="https://multikart-react-reactpixelstrap.vercel.app/_next/static/media/sub-banner2.3b2448f3.jpg" alt="" class="img-fluid media" />
                                    <div className="contain-banner">
                                        <div>
                                            <h4 className="h44">10% OFF</h4>
                                            <h1 className="h11">WOMEN</h1>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )

}
export default SpecialOffer;