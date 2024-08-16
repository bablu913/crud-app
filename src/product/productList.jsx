import React, { useEffect, useState } from "react";

import ProductCard from "./ProductCard";
import {getProducts} from "../services/productAPIService";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProductsHandler();
  }, []);

  async function getProductsHandler() {
    let data = await getProducts();
    if (data != null) {
      setProducts(data);
    }
    console.log(products);
  }
  return (
    <div>
      <h1>Product List :{products.length} </h1>
      <div className="row ">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))
        ) : (
          <h1>No Products Found</h1>
        )}
      </div>
    </div>
  );
}

export default ProductList