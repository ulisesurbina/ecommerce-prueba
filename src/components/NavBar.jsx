import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import ShoppingCart from "../pages/ShoppingCart";

const NavBar = () => {
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.setItem("email", "");
        localStorage.setItem("password", "");
        navigate("/login");
    };

    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/#/">
                        <i className="fa-solid fa-store"></i> Online Shopping
                    </Navbar.Brand>
                    <Nav className="me-auto ButtonShoppingCart">
                        <Nav.Link as={Button} href="/#/">
                            <i className="fa-solid fa-house-chimney"></i> Home
                        </Nav.Link>
                        {localStorage.getItem("email", "password") ? (
                            <Nav.Link as={Button} href="#" onClick={logOut}>
                                <i className="fa-solid fa-door-closed"></i> Log
                                out
                            </Nav.Link>
                        ) : (
                            <Nav.Link as={Button} href="/#/login">
                                <i className="fa-solid fa-door-open"></i> Log in
                            </Nav.Link>
                        )}
                        <Nav.Link> <ShoppingCart /> </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
