import React, { useState } from 'react';
import './App.css';
import ProductsList from './components/ProductsList';
import { BrowserRouter , Route, Routes  } from 'react-router-dom'
import ProductsDetials from './components/ProductsDetials';
import Header from './components/Header';
import NavBar from './NavBar';

function App() {
  const [searchShow, setSearchShow] = useState(true)
  const [counts , setCount]  = useState()
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="App">
      {/* <NavBar /> */}
      <BrowserRouter>
      <Header searchShow={searchShow}  counts={counts} setCount={setCount} setSearchTerm={setSearchTerm}/>
      <Routes>
        <Route path='/' element={<ProductsList  setSearchShow={setSearchShow} setCount={setCount}  searchTerm={searchTerm}/>} />
        <Route path='/products/:productId' element={<ProductsDetials setSearchShow={setSearchShow} setCount={setCount} />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
