import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductList from './productList'
import Home from './Home'
import ProductDetails from './ProductDetails'
import ProductAdd from './AddProduct'

const RouterConfig = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/> }/>
    <Route path="/products" element = {<ProductList/>} />
    <Route path="/products/:id" element = {<ProductDetails/>} />
    <Route path="addProducts" element = {<ProductAdd/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default RouterConfig