import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import auth from '../../firebase.init';
import { Button } from 'react-bootstrap';

const MyItems = () => {

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
            const url = `http://localhost:5000/item/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // const remaining = inventories.filter(inventory => inventory._id !== id)
                    // setInventories(remaining);
                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h3>Your Items:{items.length}</h3>
            {
                items.map(item => <div
                    key={item._id}
                >
                    <p>{item.name}</p>
                    <p>{item._id}</p>
                    <Button className='service-btn-style' onClick={() => handleDelete(item._id)}>Delete</Button>

                </div>)
            }
        </div>
    );
};

export default MyItems;