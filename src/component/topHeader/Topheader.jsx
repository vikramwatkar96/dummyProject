import React from 'react'
import '../../App.css'

function Topheader() {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div>
                            <ul className="header-list">
                                <li>Welcome to Our store Multikart</li>
                                <li><span><i className="bi bi-telephone-fill"></i></span> Call Us: +919834707617</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="left">
                            <ul className="header-list">
                                <a href="">
                                    <li><span><i className="bi bi-heart-fill"></i> Wishlist</span></li>
                                </a>
                                <a href="">
                                    <li><span><i className="bi bi-person-fill"></i></span> Login</li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Topheader