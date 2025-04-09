import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/category.css'
import { fetchProducts } from '../redux/slice/productSlice';
import { useNavigate } from 'react-router-dom';

function CategoryList({ onCategoryClick }) {
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/products/category/${category}`); 
  };

  const {items: products, status} = useSelector((state) => state.products);
  
    const dispatch = useDispatch()

    useEffect(()=>{
      if(status === 'idle'){
        dispatch(fetchProducts());
      }
    },[status]);

  useEffect(() => {
    if (products.length > 0) {
      const uniqueCategories = [
        ...new Set(products.map((product) => product.category)),
      ];
      setCategories(uniqueCategories);
    }
  }, [products]);

  return (
    <div className="category-list">
      <div className="category-scroll-container">
        {categories.map((category, index) => (
          <button
            key={index}
            className="category-box"
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
