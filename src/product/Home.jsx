import React from 'react'
import ProductAdd from './AddProduct'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <img src='https://picsum.photos/200/300' style={{ width: '40%', height: '40%' }} alt="store" />
        <div className="centered">
          <h3 className="text-center text-blue display-2 p-2">True Values Products</h3>
        </div>
      </div>
      {/* <ProductAdd/> */}
    </div>
  )
}

export default Home