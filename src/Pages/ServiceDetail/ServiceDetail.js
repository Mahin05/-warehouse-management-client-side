import axios from 'axios';
import React, { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useInventoryDetail from '../../hooks/useInventoryDetail'
import './ServiceDetails.css'


const ServiceDetail = () => {
    const { inventoryId } = useParams();
    const [service] = useInventoryDetail(inventoryId);
    const [user] = useAuthState(auth);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            img:service.img,
            description:service.description,
            price:service.price,
            quantity:service.quantity,
            supplierName:service.supplierName,
            inventoryId: inventoryId,
            address: event.target.address.value,
            phone: event.target.phone.value

        }
        // Send a POST request
        axios.post('https://serene-plateau-74796.herokuapp.com/order',order)
        .then(res => {
            // console.log(res)
            const {data} =res;
            if(data.insertedId){
                toast('Your item is booked!!');
                event.target.reset();
            }
        })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please order : {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                {/* <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" id="name" placeholder='name' required readOnly disabled /> <br /> */}
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" id="email" placeholder='email' required readOnly disabled /> <br />
                <h3>id: {inventoryId}</h3>
                <img src={service.img} alt="" />
                <p>{service.description}</p>
                <h3>Price:{service.price}</h3>
                <h3>Quantity:{service.quantity}</h3>
                <h3>Supplier:{service.supplierName}</h3>
                <input className='btn btn-primary' type="submit" value="Place order" />
            </form>
        </div>
    );
};

export default ServiceDetail;