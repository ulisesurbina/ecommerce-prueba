import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts: (state, action) => {
            const products = action.payload
            return products
        }
    }
})

export const getProductsThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get("https://fakestoreapi.com/products/")
        .then((res) => dispatch(setProducts(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const filterCategoryThunk = (category) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => dispatch(setProducts(res.data)))
        .catch(err => console.log(err.response))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
