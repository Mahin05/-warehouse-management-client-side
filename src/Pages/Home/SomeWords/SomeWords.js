import React from 'react';
import './SomeWords.css'
import CeoImage from '../../../Images/CeoImage/Mahin.jpg'

const SomeWords = () => {
    return (
        <div>
    <h2 className='some-words'> Some Words</h2>
        <div>
            <img className='ceo-image' src={CeoImage} alt="" />
            <h5 className='ceo-cmnt container'>Minhajul Islam, Managing Director, ISLAMS VEHICLE CORP.</h5>
            <p className='ceo-cmnt-p container'>Our Inventory management system has become much better Inventory Management System. We provide all kind of inventory related services. Different kind of functionalities is applied in our site.</p>
            </div>
        </div> 
    );
};

export default SomeWords;