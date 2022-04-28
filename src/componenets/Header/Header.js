import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home"> <img src={logo} alt="" /> </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="/shop">Shop</Nav.Link>
          <Nav.Link href="/order">Order</Nav.Link>
          <Nav.Link href="/inventory">Inventory</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    );
};

export default Header;