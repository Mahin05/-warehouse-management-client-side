import React from 'react';
import Banner from '../../Banner/Banner';
import Inventories from '../Inventories/Inventories';
import SomeWords from '../SomeWords/SomeWords'
import SiteInfo from '../SiteInfo/SiteInfo'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <SomeWords></SomeWords>
            <SiteInfo></SiteInfo>
        </div>
    );
};

export default Home;