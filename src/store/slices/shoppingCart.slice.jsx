import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';
import getConfig from '../../utils/getConfig';

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: [],
    reducers: {
        setShoppingCart: (state, action) => {
            const shoppingCart= action.payload
            return shoppingCart
        }
    }
})

export const getShoppingCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://fakestoreapi.com/cart?userId${user.id}`, getConfig())
        .then((res) => dispatch(setShoppingCart(res.data)))
        .finally(() => dispatch(setIsLoading(false)))
        .catch(error => console.log(error))
}

export const addShoppingCartThunk = shoppingCart => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post("https://fakestoreapi.com/carts", shoppingCart, getConfig())
        .then(() => dispatch(getShoppingCartThunk()))
        .finally(() => dispatch(setIsLoading(false)))
        .catch(error => console.log(error))
}

export const { setShoppingCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
