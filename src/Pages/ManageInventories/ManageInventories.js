import React, { useEffect, useState } from 'react';
import './ManageInventories.css'
import useInventories from '../../hooks/useInventories';
import { Button, Card, NavLink } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


const ManageInventories = () => {
    const [inventories, setInventories] = useInventories()
    const navigate = useNavigate();
    const goToAddItemPage = () => {
        navigate('/additem')
    }
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/inventory/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventories.filter(inventory => inventory._id !== id)
                    setInventories(remaining);
                })
        }
    }
    return (
        <div>
            <button className='mt-4' onClick={goToAddItemPage}>Add New Item</button>
            <h2>Manage your Inventories</h2>
            <div className='services-container'>
                {/* {
                inventories.map(inventory => <div key={inventory._id}>
                    <h5>{inventory.name} <button onClick={()=>handleDelete(inventory._id)}>X</button> </h5>
                </div>)
            } */}
                {/* {
                inventories.map(inventory => <div key={inventory._id}>
                    <h5>{inventory.name} <button onClick={() => handleDelete(inventory._id)}>X</button> </h5>
                </div>)
            } */}
                {
                    inventories.map(inventory =>
                        <Card className='container service' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={inventory.img} />
                            <Card.Body>
                                <Card.Title>{inventory.name}</Card.Title>
                                <h4>${inventory.price}</h4>
                                <h4>Quantity: {inventory.quantity}</h4>
                                <h4>Supplier: {inventory.supplierName}</h4>
                                <Card.Text>{inventory.description}</Card.Text>
                                <Button className='service-btn-style' onClick={() => handleDelete(inventory._id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    )
                }
            </div>
        </div>
    );
};


export default ManageInventories;