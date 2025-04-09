
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/productDetail.css';  // Importing the CSS
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slice/cartSlice';

function ProductDetails() {
  const { id } = useParams();  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);  
  
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);  
      } catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);  
      }
    };

    fetchProductDetails();
  }, [id]);  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-details-container">
      <h1 className="product-title">{product.title}</h1>
      <div className="product-details-content">
        <div className="product-info">
          <p className="product-description">{product.description}</p>
          <div className="product-rating-price">
            <p className="product-rating">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
            <p className="product-price">Price: ${product.price}</p>
          </div>
          <button className="add-to-cart-btn1" 
          onClick={() => {
                      dispatch(addToCart(product));
                      // alert("hi")
                    }}
          >Add to Cart</button>
        </div>
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
