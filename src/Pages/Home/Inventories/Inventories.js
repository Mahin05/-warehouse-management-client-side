import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-bootstrap';
import Inventory from '../Inventory/Inventory';
import { Link } from 'react-router-dom';
import './Inventories.css'

const Inventories = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])
    return (
        <div id='inventory'>
            <h2 className='services-title'>Our Inventories</h2>
            <div className="services-container">
                {
                    inventories.map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}
                    ></Inventory>)
                }
                <NavLink as={Link} to="manageInventory" className='mt-3'><button>Manage Inventories</button></NavLink>

            </div>
        </div>
    );
};

export default Inventories;