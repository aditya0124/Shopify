


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, updateItemQuantity } from '../redux/slice/cartSlice';

const Cart = () => {
  const { items: cartItems, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = () => {
    cartItems.forEach(item => {
      dispatch(removeItemFromCart(item.id));
    });

    setOrderPlaced(true);

    // Hide the message after 4 seconds
    setTimeout(() => {
      setOrderPlaced(false);
    }, 4000);
  };

  // Handle quantity changes
  const handleQtyChange = (id, operation) => {
    dispatch(updateItemQuantity({ id, operation }));
  };

  // Handle removing an item from the cart
  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <div className="cart-page">
      <div className="back-button-container">
        <Link to="/" className="back-button">
          &larr; Back
        </Link>
      </div>

      {orderPlaced && (
        <div className="order-confirmation-popup">
          <div className="order-confirmation-content">
            <h1>Order Placed Successfully!</h1>
          </div>
        </div>
      )}

      <div className="cart-items-container">
      {cartItems.length === 0 ? (
    <div className="empty-cart-container">
      <p>Your cart is empty.</p>
      <Link to="/" className="back-to-shopping-btn">
        Back to Shopping
      </Link>
    </div>
  )  : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-image-container">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="cart-item-info">
                <h3 className="cart-item-title">{item.title}</h3>

                <div className="cart-item-qty-price-container">
                  <div className="qty-controls">
                    <button onClick={() => handleQtyChange(item.id, 'decrease')} disabled={item.quantity === 1}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQtyChange(item.id, 'increase')} >+</button>
                  </div>

                  <div className="item-price">
                    <span>Price: ${(item.price ?? 0).toFixed(2)}</span>
                    <span>Total: ${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="remove-item-btn" onClick={() => handleRemoveItem(item.id)}>
                Remove from Cart
              </button>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="cart-total-container">
          <div className="total-price">
            <h3>Total Price: ${(totalPrice ?? 0).toFixed(2)}</h3>
          </div>
          <button className="checkout-button" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
