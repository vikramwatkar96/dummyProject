
import React from 'react';
import { FaStar } from 'react-icons/fa';
import '../../css_style/star.css'

const StarRating = ({ }) => {
    return (
        <div>
            <div className='starposition'>
                <div className='star'><FaStar /></div>
                <div className='star'><FaStar /></div>
                <div className='star'><FaStar /></div>
                <div className='star'><FaStar /></div>
                <div className='starzero'><FaStar /></div>
            </div>
        </div>
    )

};

export default StarRating;
