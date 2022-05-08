import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Inventory.css'

const Inventory = ({ inventory }) => {
    const { _id, name,quantity, supplierName,price, img, description } = inventory;
    const navigate = useNavigate();
    const navigateToInventoryDetail = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <Card className='container inventory' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title className='item-name'>{name}</Card.Title>
                <h4 className='item-price'>${price}</h4>
                <h4 className='tag'>Quantity: <span className='qnty'>{quantity}</span> </h4>
                <h4 className='tag'>Supplier: <span className='qnty'>{supplierName}</span> </h4>
                <Card.Text className='desc'>{description}</Card.Text>
                <Button className='inventoryyy-btn-style'  onClick={()=>navigateToInventoryDetail(_id)}>stock update</Button>
            </Card.Body>
        </Card>
    );
};

export default Inventory;