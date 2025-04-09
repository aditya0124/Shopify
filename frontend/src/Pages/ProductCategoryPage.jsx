import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slice/productSlice';
import Card from '../components/Card';
import { useParams } from 'react-router-dom';

const ProductCategoryPage = () => {

  const { categoryName } = useParams();

  const {items: products, status} = useSelector((state) => state.products);

  const dispatch = useDispatch()

  useEffect(()=>{
    if(status === 'idle'){
      dispatch(fetchProducts());
    }
  },[status]);
    // Filter the products based on the category
  const filteredProducts = products.filter(product => product.category === categoryName);
  console.log(filteredProducts);


  return (
    <div className="product-list">
      <h2>Our Products</h2>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );

}

export default ProductCategoryPage