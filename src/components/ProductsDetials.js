import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct} from './redux/action';
const ProductsDetials = ({ setSearchShow ,setCount}) => {
    const { productId } = useParams()
    // const [product, setProduct] = useState([])
    let product = useSelector((state) => state.product);
//  const byDefault = useRef(null)
    const dispatch = useDispatch();
    const [color, setColor] = useState('')
    const [storage, setStorage] = useState('')


    const handleColor = (x) => {
        // const byDefault.current
        if (color.includes(x)) {
            let a = color.filter((el) => {
                return x !== el
            })
            setColor(a)
        } else {
           
            setColor([...color,x])
        }
    }
    const handleStorage = (y) =>{
        if (storage.includes(y)) {
            let b = storage.filter((el) => {
                return y !== el
            })
            setStorage(b)
        } else {
            setStorage([...storage,y])
        }
    }
    

    
    useEffect(() => {
        // fetchProduct()
        dispatch(fetchProduct(productId))
        // fetchProductCart()
        setSearchShow(false)
    }, [])


    const handleCart = async() => {
        const count = {
            id: productId,
            colorCode :  Number(color),
            storageCode : Number(storage)
        }
        // console.log(count)
        setCount(count)
    }

    return (
        <>
            <div className='container-fluid'>
                {Object.keys(product).length === 0 ? (<div>
                    <h1>Loading..</h1>
                </div>) :
                    (
                        <>
                            <div className='container' style={{ marginTop: '3rem' }}>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <img className='img-fluid' src={product.imgUrl} alt='img' style={{ height: '400px' }} />
                                    </div>
                                    <div className='col-md-8  product-design mt-3'>
                                        <h3 >Description</h3>
                                        <hr />
                                        <p>Brand : {product.brand}</p>
                                        <hr />
                                        <p>Model : {product.model}</p>
                                        <hr />
                                        <p>Price : {product.price}</p>
                                        <hr />
                                        <p>CPU : {product.cpu}</p>
                                        <hr />
                                        <p>Ram : {product.ram}</p>
                                        <hr />
                                        <p>Operation System : {product.os}</p>
                                        <hr />
                                        <p>Screen Resolation : {product.displaySize}</p>
                                        <hr />
                                        <p>Cameras : {product.primaryCamera} | {product.secondaryCmera}</p>
                                        <hr />
                                        <p>Dimensions: {product.dimentions}</p>
                                        <hr />
                                        <p>Weight : {product.weight}</p>
                                        <hr />
                                    </div>
                                </div>
                            </div>

                            <div className='action-design1'>
                                <h3>ACTIONS</h3>
                                <div className='action-img mb-3'>
                                    {product.options.colors.map((x) => {

                                        return (
                                            <>
                                                <div
                                                    className='color-box1'
                                                    // ref={byDefault}
                                                    style={{ backgroundColor: color.includes(x.code) ? '#40e2a4' : '' }}
                                                    onClick={() => handleColor(x.code)}
                                                >
                                                    {x.name}
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                                <div className='action-img mb-3'>
                                    {product.options.storages.map((y) => {

                                        return (
                                            <>
                                                <div
                                                    className='color-box1'
                                                    style={{ backgroundColor: storage.includes(y.code) ? '#df68a3' : '' }}
                                                    onClick={() => handleStorage(y.code)}
                                                >
                                                    {y.name}
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                                
                                <div className='btn btn-successs' onClick={handleCart} >Add to Cart</div>
                            </div>

                        </>
                    )
                }

            </div>

        </>
    )
}

export default ProductsDetials