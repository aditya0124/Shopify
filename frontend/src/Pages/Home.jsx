import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
import Navbar from '../components/Navbar';
// import CategoryList from '../components/CategoryList';
import '../styles/home.css';

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from the API
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="home">
      <Navbar />
      <h2>Welcome to the Home Page</h2>
    </div>
  );
}

export default Home;
