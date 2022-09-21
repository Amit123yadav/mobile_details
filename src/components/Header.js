import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom'
const Header = ({searchShow, counts ,setSearchTerm}) => {
    const prod = useSelector((state) => state.allProducts.products);
    // console.log("headers", counts)
    const [counter, setCounter] = useState('')

    useEffect(() => {
        (async () => {
            const response = !!counts && await axios.post("https://front-test-api.herokuapp.com/api/cart", counts)
            console.log('response', response)
            setCounter(response.data.count)
        })()
    }, [counts])

return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light navbar-design">
            <div class="container-fluid main-content">
                <Link to={'/'} class="navbar-brand" style={{ color: 'white' }} >Mobile Shop</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon hamburg"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="d-flex ms-auto icon-design">
                        {searchShow && <input class="form-control me-2 icon-design2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setSearchTerm(e.target.value)} />}
                        <div className='btn' >{counter ? counter :  0}</div>
                    </form>
                </div>
            </div>
        </nav>
    </div>
)
}

export default Header