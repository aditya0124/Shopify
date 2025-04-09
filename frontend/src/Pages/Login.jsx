

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/login.css";
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");  
  const navigate = useNavigate();  
  // Check if user is logged in on page load (based on token in localStorage)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true); // If token exists, user is logged in
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();  // Prevent default form submission

    // Reset error before each attempt
    setError("");

    // Validate form
    if (!username || !password) {
      setError("Both fields are required.");
      return;
    }

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("token", data.token);

        setIsLoggedIn(true);

        toast.success('Welcome back!');
        navigate("/");  
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError("An error occurred during login. Please try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");

    setIsLoggedIn(false);

    navigate("/login");
  };

  return (
    <div className="login-container">
      {isLoggedIn ? (
        <>
          <h2>Welcome! You are logged in.</h2>
        </>
      ) : (
        <>
          <h2>Login</h2>
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}  
            <button type="submit" className="login-btn">Login</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Login;

