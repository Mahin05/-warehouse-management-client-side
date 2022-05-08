import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, FloatingLabel, Form, NavLink } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useInventoryDetail from '../../hooks/useInventoryDetail'
import './inventoryDetail.css'


const InventoryDetail = () => {
    const [user] = useAuthState(auth);
    const { inventoryId } = useParams();
    // const [inventory] = useInventoryDetail(inventoryId);
    // const { register, handleSubmit } = useForm();
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [inventoryId])
    // const handleQntyCnge = event => {
    //     event.preventDefault()
    //     console.log(event.target.value)
    //     const {quantity, ...rest} = inventory;
    //     const newQnty = parseInt(event.target.value);
    //     const addQnty =  parseInt(inventory.quantity) + newQnty;
    //     const updtQnty = {quantity:addQnty, ...rest};
    //     console.log(quantity,rest);
    //     console.log(updtQnty);
    //     setInventory(updtQnty);


    // }
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
            const url = `http://localhost:5000/inventory/${inventoryId}`
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
        else {
            alert('Stocked out!!')
        }
    }
    // const handleDelivery = event => {
    //     event.preventDefault()
    //     const quantity = event.target.quantity.value;
    //     const updatedQuantity = {quantity}
    //     // send data 
    //     const url = `http://localhost:5000/inventory/${inventoryId}`
    //     fetch(url,{
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(updatedQuantity)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             alert('Quantity Added Successfully!!')
    //             console.log(result);
    //             event.target.reset();
    //         })
    // }

    // const handleUpdateStock = event => {
    //     event.preventDefault()
    //     const quantity = event.target.quantity.value;
    //     // send data to server
    //     fetch('http://localhost:5000/inventory',{
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result);
    //         })
    // }
    //     const handleDelivery = event => {
    //         event.preventDefault();
    //         const deliverey = {
    //             email: user.email,
    //             inventory: inventory.name,
    //             img:inventory.img,
    //             description:inventory.description,
    //             price:inventory.price,
    //             // quantity:inventory.quantity,
    //             // newQuantity : inventory-1,
    //             supplierName:inventory.supplierName,
    //             inventoryId: inventoryId,
    //             // quantity: event.target.quantity.value,
    //             phone: event.target.phone.value

    //         }
    //         // Send a POST request
    //         axios.post('https://nameless-mesa-10052.herokuapp.com/inventory',deliverey)
    //         .then(res => {
    //             // console.log(res)
    //             const {data} =res;
    //             if(data.insertedId){
    //                 toast('Your item is booked!!');
    //                 event.target.reset();
    //             }
    //         })
    //     }
    //     const handleRestock = event => {
    //         const deliverey = {
    //             quantity: event.target.quantity.value
    //         }
    //         // Send a POST request
    //         axios.post('https://nameless-mesa-10052.herokuapp.com/inventory',deliverey)
    //         .then(res => {
    //             // console.log(res)
    //             const {data} =res;
    //             if(data.insertedId){
    //                 toast('Restocked!!');
    //                 event.target.reset();
    //             }
    //         })
    // }

    return (
        <div className='w-50 mx-auto'>
            <form onSubmit={handleDelivered}>
                {/* <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" id="name" placeholder='name' required readOnly disabled /> <br /> */}
                <img className='inventory-img' src={inventory.img} alt="" />
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
                <input className='w-100 mb-2' value={inventory.quantity} type="number" name="quantity" placeholder='quantity' required readOnly /> <br /> <br />
                {/* <input className='mb-2' value={inventory.quantity} placeholder='quantity' type="number" {...register("quantity")} required readOnly /> */}
                <input className='btn btn-primary' type="submit" value="Delivered" />
            </form>
            <form>
                <h2>Restock the item</h2>
                <input className='w-100 mb-2' type="text" name="quantity" placeholder='quantity' required /> <br />
                <input type="submit" value="Restock" />
            </form>

            <NavLink as={Link} to="/manageInventory" className='mt-3'><button>Manage Inventories</button></NavLink>
        </div>
    );
};

export default InventoryDetail;