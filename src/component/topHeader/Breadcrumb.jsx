import React from 'react'

function Breadcrumb({ pageName }) {
    return (
        <div className="breadcrumb-section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="page-title">
                            <h2>{pageName}</h2>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <nav aria-label="breadcrumb" className="theme-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="/">home /</a>
                                </li>

                                <li className="breadcrumb-item" aria-current="page">{pageName}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb