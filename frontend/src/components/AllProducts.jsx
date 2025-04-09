

import React, { useState, useEffect } from 'react';
import Card from './Card';
import '../styles/AllProduct.css';
import { useSelector,useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/slice/productSlice';







function AllProducts() {

  const {items: products, status} = useSelector((state) => state.products);

  const dispatch = useDispatch()

  

  useEffect(()=>{
    if(status === 'idle'){
      dispatch(fetchProducts());
    }
  },[status]);

  console.log(products);
  
  return (
    <div className="product-list">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
