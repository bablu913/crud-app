import axios from "axios"

const URL = 'http://localhost:5074/api/Product'
const updateUrl = 'http://localhost:5074/api/Product?id=9&price=100000';

async function getProducts() {
    let data = null;
  
    try {
      let response = await axios.get(URL);
      if (response.status == 200) {
        data = await response.data;
        console.log(data);
      }
    } catch (error) {
      return JSON.stringify(error);
    }
    return data;
  }
  async function getProductById(productId) {
    let data = null;
  
    try {
      let response = await axios.get(`${URL}/${productId}`);
      if (response.status == 200) {
        data = await response.data;
        console.log(data);
      }
    } catch (error) {
      return JSON.stringify(error);
    }
    return data;
  }

  async function addProduct(product) {
    let data = null;
  
    try {
      let response = await axios.post(URL, product);
      if (response.status == 200) {
        data = await response.data;
        console.log(data);
      }
    } catch (error) {
      return JSON.stringify(error);
    }
    return data;
  }

  async function updateProduct(product,productId) {
    let data = null;
  
    try {
      let response = await axios.put(`${URL}/${product.productId}`, product);
      if (response.status == 200) {
        data = await response.data;
        console.log(data);
      }
    } catch (error) {
      return JSON.stringify(error);
    }
    return data;
  }
  
  export  {getProducts, getProductById,addProduct};
  