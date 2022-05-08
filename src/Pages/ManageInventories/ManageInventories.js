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
            const url = `https://nameless-mesa-10052.herokuapp.com/inventory/${id}`
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
        <div className='main'>
            <button className='add-item-style-set' onClick={goToAddItemPage}>Add New Item</button>
            <h2>Manage Your Inventories</h2>
            <div className='inventories-container'>
                {
                    inventories.map(inventory =>
                        <Card className='container inventory-style' style={{ width: '18rem' }}>
                            <Card.Img className='inventory-img' variant="top" src={inventory.img} />
                            <Card.Body>
                                <Card.Title  className='item-name'>{inventory.name}</Card.Title>
                                <h4 className='item-price'>${inventory.price}</h4>
                                <h4 className='tag'>Quantity: <span className='qnty'>{inventory.quantity}</span></h4>
                                <h4 className='tag'>Supplier: <span className='qnty'>{inventory.supplierName}</span></h4>
                                <Card.Text className='desc'>{inventory.description}</Card.Text>
                                <Button className='dlt-btn-style' onClick={() => handleDelete(inventory._id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    )
                }
            </div>
        </div>
    );
};


export default ManageInventories;