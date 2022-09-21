import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux';
import { fetchProducts } from './redux/action';


const ProductsList = ({setSearchShow , setCount ,searchTerm}) => {
    // const [items, setItems] = useState([])
    const prod = useSelector((state) => state.allProducts.products);
    // console.log(prod)
    const dispatch = useDispatch();
    useEffect(() => {
        // products()
        dispatch(fetchProducts())
        setSearchShow(true)
       return ()=> setCount('')
    }, [])
    // const products = async () => {
    //     const response = await axios.get('https://front-test-api.herokuapp.com/api/product')
    //     // console.log("products", response.data)
    //     dispatch(setProducts(response.data));
    // }

    return (
        <>
        <div className='container-fluid main_container'>
            <h1>Mobiles</h1>
            <div className='row'>
                {prod.filter((val)=>{
                    if(val.model.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                    }
                }).map((item) => {
                    const { id, brand, imgUrl, model, price } = item
                    return (
                        <>
                            <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12 main_content ' key={id}>
                                <Link to={`/products/${id}`}>
                                    <div className=" card card-design">
                                        <img
                                            src={imgUrl}
                                            className="card-img-top  products-img" alt="img"
                                        /> 
                                        <div className="card-body">
                                            <h5 className="card-title">{model}</h5>
                                            <p className="card-text">{brand}</p>
                                            <p className="card-text">{price}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default ProductsList;