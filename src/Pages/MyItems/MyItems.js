import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import auth from '../../firebase.init';
import { Button, Card, NavLink } from 'react-bootstrap';
import useInventories from '../../hooks/useInventories';
import './MyItems.css'
import Loading from '../Shared/Loading/Loading';

const MyItems = () => {
    const [inventories, setInventories] = useInventories()
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `https://nameless-mesa-10052.herokuapp.com/item?email=${email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setItems(data);
        }
        getItems();

    }, [user])
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
        <div className='myItem-min-height'>
            <h3 className='my-2 itm'>Your Items: {items.length}</h3>
            <div className='inventories-container'>
                {
                    items.map(item => <Card className='container item' style={{ width: '18rem' }}>
                        <Card.Img className='inventory-img' variant="top" src={item.img} />
                        <Card.Body>
                            <Card.Title className='item-name'>{item.name}</Card.Title>
                            <h4 className='item-price'>${item.price}</h4>
                            <h4 className='tag'>Quantity: <span className='qnty'>{item.quantity}</span> </h4>
                            <h4 className='tag'>Supplier: <span className='qnty'>{item.supplierName}</span> </h4>
                            <Card.Text className='desc'>{item.description}</Card.Text>
                            <Button className='dlt-btn-style' onClick={() => handleDelete(item._id)}>Delete</Button>
                        </Card.Body>
                    </Card>)
                }
            </div>
        </div>

    );
};

export default MyItems;