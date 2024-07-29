import React from 'react'
import '../../App.css'

function Table({ columnHead = [], data = [] }) {
    return (
        <div className='container wishlist'>
            <div className='col-sm-12'>
                <div className='row'>
                    <table className='table cart-table table-responsive-xs'>
                        <thead>
                            <tr>
                                {columnHead.map((item, i) => <th key={i}>{item}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 && data.map((item, i) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.category}</td>
                                        <td>{item.title}</td>
                                        <td>{item.price}$</td>
                                        <td>{item.availabilityStatus}</td>
                                        <td>
                                            <a href=""><i className="bi bi-x"></i></a>
                                            <a href=""><i className="bi bi-cart3"></i></a>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default Table