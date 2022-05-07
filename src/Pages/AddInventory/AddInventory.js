import React from 'react';
import { useForm } from "react-hook-form";

const AddInventory = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    const url = `http://localhost:5000/inventory`;
    fetch(url,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        console.log(result);
    })
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Please add an item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='description'{...register("description")} />
                <textarea className='mb-2' placeholder='quantity'{...register("quantity")} />
                <textarea className='mb-2' placeholder='supplierName'{...register("supplierName")} />
                <input className='mb-2' placeholder='price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='photo url' type="text" {...register("img")} />
                <input className='mb-2' type="submit" value="Add New Item" />
            </form>
        </div>
    );
};

export default AddInventory;