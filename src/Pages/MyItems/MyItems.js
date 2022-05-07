import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import auth from '../../firebase.init';
import { Button, Card, NavLink } from 'react-bootstrap';
import useInventories from '../../hooks/useInventories';
import './MyItems.css'

const MyItems = () => {
    const [inventories, setInventories] = useInventories()
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `http://localhost:5000/item?email=${email}`;
            const { data } = await axios.get(url);
            setItems(data);
        }
        getItems();

    }, [user])
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
            <h3 className='my-2'>Your Items:{items.length}</h3>
            <div className='inventories-container'>
                {
                    items.map(item => <Card className='container item' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.img} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <h4>${item.price}</h4>
                            <h4>Quantity: {item.quantity}</h4>
                            <h4>Supplier: {item.supplierName}</h4>
                            <Card.Text>{item.description}</Card.Text>
                            <Button className='item-btn-style' onClick={() => handleDelete(item._id)}>Delete</Button>
                        </Card.Body>
                    </Card>)
                }
            </div>
        </div>

    );
};

export default MyItems;