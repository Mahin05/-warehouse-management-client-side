import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, FloatingLabel, Form, NavLink } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './inventoryDetail.css'


const InventoryDetail = () => {
    const [user] = useAuthState(auth);
    const { inventoryId } = useParams();
    // const [inventory] = useInventoryDetail(inventoryId);
    // const { register, handleSubmit } = useForm();
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        const url = `https://nameless-mesa-10052.herokuapp.com/inventory/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [inventoryId])

    const handleDelivered = event => {
        event.preventDefault()
        console.log(event.target.value)
        const { quantity, ...rest } = inventory;
        // const newQnty = parseInt(event.target.value);
        const subQuantity = parseInt(inventory.quantity) - 1;
        if (subQuantity >= 0) {
            const updatedQuantity = { quantity: subQuantity, ...rest };
            console.log(quantity, rest);
            console.log(updatedQuantity);
            setInventory(updatedQuantity);
            // send data 
            const url = `https://nameless-mesa-10052.herokuapp.com/inventory/${inventoryId}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedQuantity)
            })
                .then(res => res.json())
                .then(result => {
                    alert('Quantity Delivered Successfully!!')
                    console.log(result);
                    event.target.reset();
                })
        }
        else {
            alert('Stocked out!!')
        }
    }
    const handleRestock = event => {
        event.preventDefault()
        console.log(event.target.value)
        const { quantity, ...rest } = inventory;
        const newQuantity = parseInt(event.target.quantity.value);
        const addedQuantity = parseInt(inventory.quantity) + newQuantity;
        const updatedQuantity = { quantity: addedQuantity, ...rest };
        console.log(quantity, rest);
        console.log(updatedQuantity);
        setInventory(updatedQuantity);
        // send data 
        const url = `https://nameless-mesa-10052.herokuapp.com/inventory/${inventoryId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(result => {
                alert('Quantity Added Successfully!!')
                console.log(result);
                event.target.reset();
            })

    }

    return (
        <div className='w-50 mx-auto'>
            <h2 className='restock-update'>Restock Update</h2>
            <form onSubmit={handleDelivered}>
                <img className='in-img' src={inventory.img} alt="" />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled /> <br />
                <input className='w-100 mb-2' type="text" value={inventoryId} name="inventoryId" placeholder='inventoryId' required readOnly disabled /> <br />
                <input className='w-100 mb-2' type="text" value={inventory.name} name="inventory" placeholder='service' required readOnly disabled /> <br />
                <FloatingLabel controlId="floatingTextarea2" label={inventory.description}>
                    <Form.Control
                        as="textarea"
                        className='mb-2'
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                        readOnly
                        disabled
                    />
                </FloatingLabel>
                <input className='w-100 mb-2' type="text" value={inventory.price} name="price" placeholder='price' required readOnly disabled /> <br />
                <input className='w-100 mb-2' type="text" value={inventory.supplierName} name="price" placeholder='price' required readOnly disabled /> <br />
                <input className='w-100 mb-2' value={inventory.quantity} type="number" name="quantity" placeholder='quantity' required readOnly /> <br />
                <input className='w-100 mb-2' type="number" name="quantity" placeholder={inventory.quantity? 'Stock Available':'Sold'} required readOnly /> <br /> <br />
                <input className='btn btn-delivered' type="submit" value="Delivered" />
            </form>
            <form onSubmit={handleRestock}>
                <h2 className='restock'>Restock the item</h2>
                <input className='w-100 mb-2' type="text" name="quantity" placeholder='quantity' required /> <br />
                <input className='btnn' type="submit" value="Restock" />
            </form>

            <NavLink as={Link} to="/manageInventory" className='mt-3 '><button className='in-btn-style' >Manage Inventories</button></NavLink>
        </div>
    );
};

export default InventoryDetail;