import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    filterCategoryThunk,
    getProductsThunk,
} from "../store/slices/products.slice";

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const products = useSelector((state) => state.products);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        dispatch(getProductsThunk());
        axios
            .get("https://fakestoreapi.com/products/categories")
            .then((res) => setCategories(res.data));
    }, []);

    return (
        <div className="Home">
            <Row>
                <Col lg={3}>
                    <h3>Categories</h3>
                    <ListGroup>
                        {categories.map((category) => (
                            <ListGroup.Item
                                key={category}
                                onClick={() =>
                                    dispatch(filterCategoryThunk(category))
                                }>
                                {category}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
                <Col>
                    <section className="ProductsContainer">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                onClick={() =>
                                    navigate(`/productDetails/${product.id}`)
                                }
                                className="ProductCard">
                                <Card style={{ width: "18rem" }}>
                                    <Card.Img
                                        variant="top"
                                        src={product.image}
                                        alt={`Image of ${product.title}`}
                                    />
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>
                                            Category: {product.category}
                                        </Card.Text>
                                        <Card.Text>
                                            {product.description}
                                        </Card.Text>
                                        <Card.Text>
                                            Rating: {product.rating?.rate} ★
                                        </Card.Text>
                                        <Card.Text>
                                            Price: ${product.price}
                                        </Card.Text>
                                    </Card.Body>
                                    <Button variant="dark">Add to car</Button>
                                </Card>
                            </div>
                        ))}
                    </section>
                </Col>
            </Row>
        </div>
    );
};

export default Home;
