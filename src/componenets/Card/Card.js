import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CardDetails from '../CardDetails/CardDetails';
import Cart from '../Cart/Cart';
import './Card.css'

const Card = () => {
    const [products , setProducts] = useState([]);
    useEffect(() => {
        fetch ("products.json")
        .then(res => res.json())
        .then(data => setProducts(data));

    },[])
    const [cart , setCart] = useState([]);
    const handleCart = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (     
        <Container className='mt-5 pt-5'>
                <Row className="justify-content-md-center">
                    <Col className='products'>
                    {
                    products.map(product => <CardDetails key={product.id} product={product} handleCart={handleCart} > </CardDetails>)
                    }
                    </Col>
                    <Col className='order-section' md="auto">
                        <Cart cart={cart}> </Cart>
                    </Col>
                </Row>
        </Container>
            
    );
};

export default Card;