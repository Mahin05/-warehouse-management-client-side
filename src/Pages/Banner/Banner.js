import React from 'react';
import { Carousel } from 'react-bootstrap';
import prado from '../../Images/prado.jpg'
import tuv from '../../Images/tuv.webp'
import bolero from '../../Images/bolero.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block"
                    src={tuv}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className='text-color'>ISLAMS VEHICLE CORPORATION</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={prado}
                    alt="Second slide"
                />

                <Carousel.Caption>
                <h1  className='text-color'>ISLAMS VEHICLE CORPORATION</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bolero}
                    alt="Third slide"
                />

                <Carousel.Caption>
                <h1 className='text-color'>ISLAMS VEHICLE CORPORATION</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;