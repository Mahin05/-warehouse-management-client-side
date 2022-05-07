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
        <Card className='container service' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <h4>${price}</h4>
                <h4>Quantity: {quantity}</h4>
                <h4>Supplier: {supplierName}</h4>
                <Card.Text>{description}</Card.Text>
                <Button className='service-btn-style'  onClick={()=>navigateToInventoryDetail(_id)}>manage</Button>
            </Card.Body>
        </Card>
    );
};

export default Inventory;