import React from 'react';
import './Album.css'
import prado from '../../../Images/prado.jpg'
import tuv from '../../../Images/tuv.jpg'
import bolero from '../../../Images/bolero.jpg'
import { Carousel } from 'react-bootstrap';

const Album = () => {
    return (
        <div id='album' className='album container mt-3'>
            <h2>OUR Products</h2>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={prado}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={tuv}
                        alt="Third slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bolero}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Album;