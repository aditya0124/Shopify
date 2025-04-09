import React from "react";
import "../styles/card.css";
import { useDispatch } from "react-redux"; 
import { addToCart } from "../redux/slice/cartSlice"; 
import { useNavigate } from "react-router-dom";

const Card = ({ product }) => {
  const truncatedTitle = product.title.length > 25 ? product.title.substring(0, 19) + "..." : product.title;
const dispatch = useDispatch();
const navigate = useNavigate();

const handleViewClick = () => {
  navigate(`/product-details/${product.id}`);
};
  return (
    <div className="card-container">
      <div className="card-header">
        <img
          src={product.image}
          alt={product.title}
          className="card-image"
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">{truncatedTitle}</h3>
        <div className="card-footer">
          <div className="card-price">
            <span>${product.price}</span>
          </div>
        </div>
        <button
          className="add-to-cart-btn"
          onClick={() => {
            dispatch(addToCart(product));
          }}
        >
          Add to Cart
        </button>

        <button
          className="add-to-cart-btn"
          onClick={() => {
              handleViewClick()
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;



