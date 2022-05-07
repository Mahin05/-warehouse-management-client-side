import React from 'react';
import './GoMobileWithAPP.css'

const GoMobileWithAPP = () => {
    return (
        <div>
            <h2>Go mobile with our iOS and Android app.</h2>
            <div>
                <img className='app-image' src="https://www.zoho.com/inventory/mobile/appstore.svg" alt="" />
                <img className='app-image' src="https://www.zoho.com/inventory/mobile/playstore-badge.svg" alt="" />
            </div>
            <div>
                <img className='mob-app-img' src="https://www.zoho.com/inventory/images/mobile-app-1x.png" alt="" />
                <img className='mob-app-img'  src="https://www.zoho.com/inventory/images/mobile-app-so-1x.png" alt="" />
            </div>
        </div>
    );
};

export default GoMobileWithAPP;