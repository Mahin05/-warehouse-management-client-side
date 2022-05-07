import axios from 'axios';
import React, { useState } from 'react';
import { Button, FloatingLabel, Form, NavLink } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useInventoryDetail from '../../hooks/useInventoryDetail'
import './inventoryDetail.css'


const InventoryDetail = () => {
    const { inventoryId } = useParams();
    const [inventory] = useInventoryDetail(inventoryId);
    const [user] = useAuthState(auth);
    let newQuantity;

    const handleDelivery = event => {
        event.preventDefault();
        const deliverey = {
            email: user.email,
            inventory: inventory.name,
            img:inventory.img,
            description:inventory.description,
            price:inventory.price,
            // quantity:inventory.quantity,
            // newQuantity : inventory-1,
            supplierName:inventory.supplierName,
            inventoryId: inventoryId,
            // quantity: event.target.quantity.value,
            phone: event.target.phone.value

        }
        // Send a POST request
        axios.post('http://localhost:5000/inventory',deliverey)
        .then(res => {
            // console.log(res)
            const {data} =res;
            if(data.insertedId){
                toast('Your item is booked!!');
                event.target.reset();
            }
        })
    }
    const handleRestock = event => {
        const deliverey = {
            quantity: event.target.quantity.value
        }
        // Send a POST request
        axios.post('http://localhost:5000/inventory',deliverey)
        .then(res => {
            // console.log(res)
            const {data} =res;
            if(data.insertedId){
                toast('Restocked!!');
                event.target.reset();
            }
        })
}

    return (
        <div className='w-50 mx-auto'>
            <form onSubmit={handleDelivery}>
                {/* <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" id="name" placeholder='name' required readOnly disabled /> <br /> */}
                <img className='inventory-img' src={inventory.img} alt="" />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" id="email" placeholder='email' required readOnly disabled /> <br />
                <input className='w-100 mb-2' type="text" value={inventoryId} name="inventoryId" id="inventoryId" placeholder='inventoryId' required readOnly disabled /> <br />
                <input className='w-100 mb-2' type="text" value={inventory.name} name="inventory" id="inventory" placeholder='service' required readOnly disabled /> <br />
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
                <input className='w-100 mb-2' type="text" value={inventory.price} name="price" id="price" placeholder='price' required readOnly disabled/> <br />
                <input className='w-100 mb-2' type="text" value={inventory.supplierName} name="price" id="price" placeholder='price' required readOnly disabled/> <br />
                <input className='w-100 mb-2' type="text" value={inventory.quantity} name="quantity" id="quantity" placeholder='quantity' required readOnly disabled/> <br />
                <input className='btn btn-primary' type="submit" value="Delivered" />
            </form>
            <form onSubmit={handleRestock}>
                <h2>Restock the item</h2>
                <input type="number" /> <br />
                <input type="submit" value="Restock" />
            </form>

            <NavLink as={Link} to="/manageInventory" className='mt-3'><button>Manage Inventories</button></NavLink>
        </div>
    );
};

export default InventoryDetail;