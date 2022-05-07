import React, { useState } from 'react';
import Banner from '../../Banner/Banner';
import GoMobileWithAPP from '../GoMobileWithAPP/GoMobileWithAPP';
import Inventories from '../Inventories/Inventories';
import SomeWords from '../SomeWords/SomeWords'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <GoMobileWithAPP></GoMobileWithAPP>
            <SomeWords></SomeWords>
        </div>
    );
};

export default Home;