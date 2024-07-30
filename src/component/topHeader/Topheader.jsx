import React from 'react'
import '../../css_style/topHeader.css'

function Topheader() {
    return (
        <header>
            <div className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="header-contact">
                                <ul>
                                    <li>Welcome to Our store Multikart</li>
                                    <li><i className="fa fa-phone text-white" aria-hidden="true"></i>Call Us: 123 - 456 -
                                        7890
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-end col-lg-6">
                            <ul className="header-dropdown">
                                <li className="mobile-wishlist"><a href="/page/account/wishlist"><i className="fa fa-heart"
                                    aria-hidden="true"></i> wishlist</a></li>
                                <li className="onhover-dropdown mobile-account"><i className="fa fa-user"
                                    aria-hidden="true"></i> My
                                    Account<ul className="onhover-show-div">
                                        <li><a href="/page/account/login">Login</a></li>
                                        <li><a href="/page/account/register">Register</a></li>
                                        <li><a>Logout</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Topheader