import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import './AddInventory.css'

const AddInventory = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = data => {
        console.log(data);
        const url = `https://nameless-mesa-10052.herokuapp.com/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='add-form-h2style'>Please Add An Item</h2>
            <form className='d-flex flex-column add-form-style' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' value={user.email} placeholder='Email' {...register("email")} />
                <input className='mb-2' placeholder='Enter item name' {...register("name")} required />
                <textarea style={{ height: '100px' }}
                    className='mb-2' placeholder='Write some description'{...register("description")} required />
                <input className='mb-2' placeholder='What is the quantity?' type="number" {...register("quantity")} required />
                <input className='mb-2' placeholder='Enter supplier name' type="text" {...register("supplierName")} required />
                <input className='mb-2' placeholder='What is the price' type="number" {...register("price")} required />
                <input className='mb-2' placeholder='Enter photo url' type="text" {...register("img")} />
                <input className='mb-2 add-item-btn-style' type="submit" value="Add New Item" />
            </form>
        </div>
    );
};

export default AddInventory;