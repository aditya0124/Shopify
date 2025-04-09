

  import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key'; // Use a secret key to sign the JWT

// Function to generate JWT token
export const generateJWT = (user) => {
  // Payload contains the user info (ID, username, etc.)
  const payload = {
    id: user.id,
    username: user.username,
    email: user.email,
  };

  // Create the token with expiration of 24 hours
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' });
  return token;
};

// Function to verify JWT token
export const verifyJWT = (token) => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch (error) {
    return null; // Token is invalid or expired
  }
};
