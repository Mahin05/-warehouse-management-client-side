import React, { useEffect, useState } from 'react';
import Service from '../Inventory/Inventory';
import './Inventories.css'

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/inventory')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div id='services'>
            <h2 className='services-title'>Our Services</h2>
            <div className="services-container">
            {
                services.map(service => <Service
                key={service._id}
                service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;