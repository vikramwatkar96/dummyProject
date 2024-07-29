import React from 'react'
import Breadcrumb from '../component/topHeader/Breadcrumb'
import Table from '../component/topHeader/Table'
import '../App.css'

function Wishlist({ data, columnHead }) {
    return (
        <div>
            <Breadcrumb pageName="wishlist" />
            <Table data={data} columnHead={columnHead} />
            <div className="wishListSection">
                <div className="col-sm-12">
                    <a className="btn btn-solid" href="/">continue shopping</a><br /><br /><br /><br /><br />
                    <a className="btn btn-solid" href="/">check out</a>
                </div>
            </div>
        </div>
    )
}

export default Wishlist