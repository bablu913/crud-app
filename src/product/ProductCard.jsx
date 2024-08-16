import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = (props) => {
  return (
    <div className="card m-2" style={{ width: 18 + "rem" }}>
      <img
        className="card-img-top"
        src="https://media.licdn.com/dms/image/C4D03AQGa189klKJm1w/profile-displayphoto-shrink_200_200/0/1663602840536?e=2147483647&v=beta&t=lKJzjQ-PdBCL0_8zQJc2znS2IC7gvNNovDaoEJwpBJk"
        alt={props.product.name}
      />
      <div className="card-body">
        <h5 className="card-title">{props.product.productName}</h5>
        <h6 className="card-title">₹ {props.product.price}</h6>
        <span className="badge text-bg-secondary">{props.product.category}</span>
        <span className="m-1 badge text-bg-primary">
          {props.product.productCode}
        </span>
        <p className="card-text">{props.product.description}</p>
        <span>
          <FaStar width={10} height={10} /> {props.product.starRating}
        </span>
      </div>
      <button
          className="btn btn-primary"
          onClick={() => (window.location.href = `/products/${props.product.productId}`)}
        >
          View Product
        </button>'
    </div>
  );
};

export default ProductCard;