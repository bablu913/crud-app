import React, { useEffect, useState } from 'react'
import { getProductById } from '../services/productAPIService';
import { useParams } from 'react-router';
const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
      getProductByIdHandler(id);
    }, []);
  
    async function getProductByIdHandler(id) {
      let data = await getProductById(id);
      if (data != null) {
        setProduct(data);
      }
      console.log(product);
    }
    return (
      <div className="container">
        <img
        style={{ width: 18 + "rem" }}
        className="card-img-top"
        src="https://media.licdn.com/dms/image/C4D03AQGa189klKJm1w/profile-displayphoto-shrink_200_200/0/1663602840536?e=2147483647&v=beta&t=lKJzjQ-PdBCL0_8zQJc2znS2IC7gvNNovDaoEJwpBJk"
        alt='random-img'
      />
        <h1>Product Details {product.productId}</h1>
        <p>Name : {product.productName}</p>
        <p>Price : {product.price}</p>
        <p>Category : {product.category}</p>
        <p>Description : {product.description}</p>
        <p>Product Code : {product.productCode}</p>
        <p>Star Rating : {product.starRating}</p>
      </div>
    );
}

export default ProductDetails