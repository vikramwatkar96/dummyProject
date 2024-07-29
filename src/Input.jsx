import React from 'react'

function Input({ lable = '', id = '', placeholder = '', type = '' }) {
    return (
        <div>
            <div className='form-group'>
                <label htmlFor="email" class="form-label">{lable}</label>
                <input id={id} placeholder={placeholder} type={type} class="form-control form-control"></input>
            </div>
        </div>
    )
}

export default Input