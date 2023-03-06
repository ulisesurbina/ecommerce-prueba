import React, { useEffect, useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

const ShoppingCart = () => {
    const navigate = useNavigate();
    const data = localStorage.getItem("email", "password");

    const [show, setShow] = useState(false);

    const [shoppingCarts, setShoppingCarts] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        if (data === "john@gmail.com" && "m38rmF$") {
            setShow(true);
        } else {
            navigate("/login");
        }
    };

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/carts`)
            .then((res) => setShoppingCarts(res.data))
            .catch((error) => console.log(error));
    }, []);

    // console.log(shoppingCarts)

    const buyCart = () => {
        navigate("/purchases");
    };

    return (
        <div>
            <Button
                className="ButtonShoppingCart"
                onClick={handleShow}>
                <i className="fa-solid fa-cart-shopping"></i> Shopping Cart
            </Button>
            <Offcanvas
                show={show}
                onHide={handleClose}
                scroll={true}
                placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        <section>
                            {shoppingCarts?.map((shoppingCart) => (
                                <div key={Date.now()}>
                                    {shoppingCart.products.map((product) => (
                                        <div
                                            key={product.productId}
                                            onClick={() =>
                                                navigate(
                                                    `/productDetails/${product.productId}`
                                                )
                                            }
                                            className="ShoppingCartContainer">
                                            <h4>
                                                Product Id: {product.productId}
                                            </h4>
                                            <h4>
                                                Quantity: {product.quantity}
                                            </h4>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </section>
                        <Button onClick={buyCart}>Buy</Button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default ShoppingCart;
