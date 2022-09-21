import { ActionTypes } from "./ActionTypes";
import FetchApi from "../FETCHAPI/FetchApi";


export const fetchProducts = () => async (dispatch) => {
    const response = await FetchApi.get('/product ')
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data })
}

export const fetchProduct = (id) => async (dispatch) => {
    const response = await FetchApi.get(`/product/${id}`)
    dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data })
}
export const fetchProductCart = () => async (dispatch) => {
    const response = await FetchApi.post('/cart ')
    dispatch({ type: ActionTypes.CART_SELECTED_PRODUCT, payload: response.data })
}
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};


export const color = () =>{
  return{
    type : ActionTypes.COLOR
  }
}
export const setcolor = () =>{
  return{
    type : ActionTypes.SET_COLOR
  }
}
export const storage = () =>{
  return{
    type : ActionTypes.STORAGE
  }
}