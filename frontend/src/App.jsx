// import React, { useState, useEffect } from 'react';
// import './App.css';
// import ProductList from './components/ProductList';
// import CategoryList from './components/CategoryList';
// import SearchBar from './components/SearchBar';
// import Header from './components/Header';

// function App() {
//   const [categories, setCategories] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products/categories')
//       .then(res => res.json())
//       .then(data => setCategories(data));
//   }, []);

//   // Fetch products based on category or all products
//   const fetchProducts = (category = "") => {
//     let url = "https://fakestoreapi.com/products";
//     if (category) {
//       url = `https://fakestoreapi.com/products/category/${category}`;
//     }

//     fetch(url)
//       .then(res => res.json())
//       .then(data => {
//         setProducts(data);
//         setFilteredProducts(data);
//       });
//   };

//   // Handle search query change
//   const handleSearch = (query) => {
//     setSearchQuery(query);
//     const filtered = products.filter(product =>
//       product.title.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   };

//   return (
//     <div className="App">
//       <Header />
//       <SearchBar onSearch={handleSearch} />
//       <CategoryList categories={categories} onCategoryClick={fetchProducts} />
//       <h2>Our Products</h2>
//       <button onClick={() => fetchProducts()}>Fetch All Products</button>
//       <ProductList products={filteredProducts} />
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from '../src/Pages/Home';
// // import ProductCategoryPage from './pages/ProductCategoryPage';
// // import LoginPage from './pages/LoginPage';
// // import SignupPage from './pages/SignupPage';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* <Route path="/products/category/:categoryName" element={<ProductCategoryPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} /> */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../src/utils/MainLayout';
// import Login from '../src/Pages/Login';
import './App.css';
import ProductDetails from './Pages/ProductDetails';
import ProductCategoryPage from './Pages/ProductCategoryPage';
import AllProducts from './components/AllProducts';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import CategoryList from './components/CategoryList';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <CategoryList/>
            <AllProducts />
          </>
        ),
      },
      
      {
        path: "product-details/:id",
        element: (
          <ProductDetails />
        ),
      },
      {
        path: "products/category/:categoryName",
        element: (
          <ProductCategoryPage />
        ),
      },
      {
        path: "cart",
        element: (
          <Cart/>
        ),
      },
      {
        path: "login",
        element: (
          <Login/>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={appRouter} />
    </main>
  );
}

export default App;
