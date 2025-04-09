---

# Shopify - Front-End Internship Assignment

## Overview

Hello! I'm a web developer, and this project is my solution for the **Front-End Internship Assignment** I received from an organization. The task was to build a simple shopping website using **React.js** and the **Fake Store API**. The website includes features such as login authentication, product listing, product details, cart management, and checkout functionality.

The project is fully responsive, built with a mobile-first approach, and demonstrates my understanding of integrating APIs, managing state, and creating clean, modern user interfaces.

## Features Implemented

### 1. **Login Page**
   - Form with fields for username and password.
   - Authenticating the user using the Fake Store API's `/auth/login` endpoint.
   - Storing the JWT token in localStorage for maintaining the user session.
   - Redirecting to the product listing page upon successful login.

   **Login Credentials:**
   - Username: **johnd**
   - Password: **m38rmF$**

### 2. **Product Listing Page (Home)**
   - Fetches and displays all products from the `/products` endpoint.
   - Implements filtering by category using `/products/category/:category`.
   - (Optional) A search bar for users to filter products based on keywords.
   - Responsive grid layout optimized for mobile-first design.

### 3. **Product Detail Page**
   - Displays detailed information about the selected product (image, title, description, price).
   - Includes an "Add to Cart" button for adding products to the shopping cart.

### 4. **Cart Page**
   - Displays all products added to the cart.
   - Allows users to update the quantity of products or remove items.
   - Shows the total price of all the items in the cart.
   - Includes a Checkout button which clears the cart and shows a confirmation message after placing the order.

### 5. **Header / Navigation**
   - Contains links to Home, Cart, and Logout pages.
   - Displays the current number of items in the cart.
   - Clicking "Logout" clears the JWT token and redirects the user to the Login page.

## Tech Stack

- **Frontend**: React.js (Vite or CRA)
- **Routing**: React Router v6+
- **State Management**: React Hooks (Context API for managing cart state)
- **Styling**: Plain CSS with a focus on responsiveness (mobile-first approach)
- **API**: Fake Store API ([https://fakestoreapi.com/docs](https://fakestoreapi.com/docs))

## Deployment

I deployed it on **Vercel**. You can view the live version of the project at the link below:

[Live Demo](https://shopify-orcin-pi.vercel.app/)

## Setup Instructions

To run the project locally:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/aditya0124/Shopify.git
   cd Shopify
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm start
   ```

This will start the app on `http://localhost:5173` by default.

## Conclusion

This project helped me enhance my skills in React.js, API integration, and front-end development in general. I focused on building a responsive and clean user interface, ensuring that the website is mobile-friendly and offers an intuitive user experience.

I hope you find the project interesting and functional. If you have any feedback or questions, feel free to reach out.

Thank you for your time and consideration!

---

### Best Regards,  
**Aditya**  
Email: [adityanath.connect@gmail.com](mailto:adityanath.connect@gmail.com)  
GitHub: [https://github.com/aditya0124](https://github.com/aditya0124)

---

This version includes the login credentials for testing and the live demo link hosted on Vercel.
