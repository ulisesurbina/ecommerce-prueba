import React, { useEffect, useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductsThunk } from "../store/slices/products.slice";
import { addShoppingCartThunk } from "../store/slices/shoppingCart.slice";

const ProductDetails = () => {
    const allProducts = useSelector((state) => state.products);
    const [productDetail, setProductDetail] = useState({});
    const [suggestedProducts, setSuggestedProducts] = useState([]);

    const navigate = useNavigate();

    const { id } = useParams();
    const dispatch = useDispatch();
    const [counter, setCounter] = useState(1);
    const increment = () => {
        setCounter(counter + 1);
    };
    const decrement = () => {
        setCounter(counter - 1);
    };

    const addToCart = () => {
        const quantity = {
            id: productDetail.id,
            quantity: counter,
        };
        dispatch(addShoppingCartThunk(quantity));
        console.log(quantity);
    };

    useEffect(() => {
        const productsFind = allProducts.find(
            (productItem) => Number(productItem.id) === Number(id)
        );
        setProductDetail(productsFind);

        const filteredProducts = allProducts.filter(
            (productItem) => productItem.category === productsFind.category
        );
        setSuggestedProducts(filteredProducts);
    }, [allProducts, id]);

    useEffect(() => {
        dispatch(getProductsThunk());
    }, []);

    console.log(suggestedProducts);

    return (
        <div>
            <section>
                <div className="ContainerImg">
                    <img
                        src={productDetail?.image}
                        alt={`Image of ${productDetail?.title}`} 
                        className="ImgDetail"
                    />
                </div>
                <div>
                    <h1>{productDetail?.title}</h1>
                    <h4>Category: {productDetail?.category}</h4>
                    <hr />
                    <h3>
                        <b>Price: $ {productDetail?.price}</b>
                    </h3>
                    <div>
                        <h3>
                            <b>Quantity:</b> {counter}
                        </h3>
                        <button onClick={increment}>
                            <i className="fa-solid fa-arrow-up"></i>
                        </button>
                        <button disabled={counter <= 1} onClick={decrement}>
                            <i className="fa-solid fa-arrow-down"></i>
                        </button>
                    </div>
                    <div className="">
                        <Button
                            onClick={addToCart}
                            style={{ color: "black" }}
                            variant="danger">
                            Add to car
                        </Button>
                    </div>
                    <hr />
                    <h6>{productDetail?.description}</h6>
                </div>
            </section>
            <section>
                <div style={{ textAlign: "center" }}>
                    <h3>
                        <b>Suggested Products</b>
                    </h3>
                </div>
                <div className="ContainerImgCarrousel">
                    <Carousel variant="dark">
                        {suggestedProducts.map((suggested) => (
                            <Carousel.Item key={suggested.id}>
                                <div>
                                    <img
                                        className="d-block w-100 ImgDetail"
                                        alt="First slide"
                                        onClick={() =>
                                            navigate(
                                                `/productDetails/${suggested.id}`
                                            )
                                        }
                                        src={suggested.image}
                                    />
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <h5
                                        onClick={() =>
                                            navigate(
                                                `/productDetails/${suggested.id}`
                                            )
                                        }>
                                        {suggested.title}
                                    </h5>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </section>
        </div>
    );
};

export default ProductDetails;
