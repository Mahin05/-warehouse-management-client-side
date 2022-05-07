import React from 'react';
import Banner from '../../Banner/Banner';
import Album from '../Album/Album';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Album></Album>
        </div>
    );
};

export default Home;