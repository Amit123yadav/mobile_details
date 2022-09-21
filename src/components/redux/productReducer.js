import { ActionTypes } from "./ActionTypes";


const initialState = {
    products: [],
    color: [],
    storage : [],
    setColor : [],
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload }
        case ActionTypes.FETCH_PRODUCTS:
            return { ...state, products: payload }
        default:
            return state


    }
}
export const singleProductDetails = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload }
        default:
            return state
    }
}
export const singleProductDetailsCart = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.CART_SELECTED_PRODUCT:
            return { ...state, ...payload }
        default:
            return state
    }
}

export const Color = (state = {}, { type}) => {
    switch (type) {
        case ActionTypes.COLOR:
            return { ...state, color: state.color }
        case ActionTypes.SET_COLOR:
            return { ...state, color: state.color }
        default:
            return state
    }
}

export const Storage = (state = {}, { type}) => {
    switch (type) {
        case ActionTypes.COLOR:
            return { ...state, storage: state.storage }
        default:
            return state
    }
}