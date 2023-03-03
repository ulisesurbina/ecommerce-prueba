import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/#/">Ecommerce</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/#/">Home</Nav.Link>
                        <Nav.Link href="/#/login">Login</Nav.Link>
                        <Nav.Link href="/#/shoppingCart">Shopping Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
