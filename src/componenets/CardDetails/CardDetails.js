import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './CardDetails.css'

const CardDetails = (props) => {
    const{product,handleCart} = props;
    const{name,price,img,quantity,shipping,category,ratings,seller} = props.product;
    return (
        <Card className='card' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                <Card.Title> {name}</Card.Title>
                <Card.Title> <p>Price:${price} </p> </Card.Title>
                <Card.Title> <p>Quantity:{quantity} </p> </Card.Title>
                <Card.Title> <p>Shipping Cost: {shipping} </p></Card.Title>
                <Card.Title> <p>Ratings: {ratings} </p> </Card.Title>
                <Card.Title> Company : {seller} </Card.Title>
                
                <Button onClick={() =>handleCart(product)}  className='w-100 button' variant="warning"> Add To Cart
                <FontAwesomeIcon icon={faCartShopping} />
                
                </Button>

            </Card.Body>
        </Card>
    );
};

export default CardDetails;