import {  combineReducers } from "redux";
import { productReducer ,singleProductDetails,Color,Storage,setColor,singleProductDetailsCart} from "./productReducer";

const reducers = combineReducers({
    allProducts : productReducer,
    product : singleProductDetails,
    Color,
    Storage,
    singleProductDetailsCart ,
})


export default reducers;