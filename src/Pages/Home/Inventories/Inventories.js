import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-bootstrap';
import Inventory from '../Inventory/Inventory';
import { Link } from 'react-router-dom';
import './Inventories.css'
import Loading from '../../Shared/Loading/Loading';

const Inventories = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('https://nameless-mesa-10052.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])
    
    return (
        <div>
            <div id='inventory'>
                <h2 className='inventories-title'>Our Inventories</h2>
                <div className="inventories-container">
                    {
                        inventories.map(inventory => <Inventory
                            key={inventory._id}
                            inventory={inventory}
                        ></Inventory>)
                    }
                </div>
                <NavLink as={Link} to="manageInventory" className='mt-3'><button className='mng-invnt'>Manage Inventories</button></NavLink>
            </div>
        </div>
    );
};

export default Inventories;