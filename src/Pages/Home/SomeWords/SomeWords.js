import React from 'react';
import './SomeWords.css'
import CeoImage from '../../../Images/CeoImage/Mahin.jpg'

const SomeWords = () => {
    return (
        <div>
    <h2> Some Words</h2>
        <div>
            <img className='ceo-image' src={CeoImage} alt="" />
            <h5>Minhajul Islam, Managing Director, ISLAMS VEHICLE CORP.</h5>
            <p>Our stock management system has become much better Inventory Management System. We also switched to Zoho Books for our accounting management for its seamless integration with Zoho Inventory</p>
            </div>
        </div> 
    );
};

export default SomeWords;