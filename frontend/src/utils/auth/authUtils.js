export const login = (username, password) => {
    // Example of validating user credentials (you can integrate with an API here)
    const users = [
      { id: 1, username: 'john', password: 'john123', email: 'john@example.com' },
      { id: 2, username: 'jane', password: 'jane123', email: 'jane@example.com' },
    ];
    
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
      const token = generateJWT(user); // Call the function to generate the JWT
      localStorage.setItem('token', token); // Store JWT in localStorage
      return { message: 'Login successful', token };
    }
    return { message: 'Invalid credentials' };
  };
  
  export const logout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage on logout
  };
  
  const generateJWT = (user) => {
    const payload = { id: user.id, username: user.username, email: user.email };
    const token = jwt.sign(payload, 'your_secret_key', { expiresIn: '24h' });
    return token;
  };
  