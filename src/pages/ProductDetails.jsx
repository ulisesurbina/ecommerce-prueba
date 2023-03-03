import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductsThunk } from '../store/slices/products.slice';

const ProductDetails = () => {

    const allProducts = useSelector(state => state.products);
    const [productDetail, setProductDetail] = useState({});
    // const [suggestedProducts, setSuggestedProducts] = useState([]);

    const { id } = useParams();
    const dispatch = useDispatch();



    useEffect(() => {
        const productsFind = allProducts.find((productItem) => Number(productItem.id) === Number(id))
        setProductDetail(productsFind)
        // console.log(productsFind)
    }, [allProducts, id])

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])


    return (
        <div>
            <h1>Product detail</h1>
            <h5>{productDetail?.title}</h5>
            <img src={productDetail?.image}/>

        </div>
    );
};

export default ProductDetails;