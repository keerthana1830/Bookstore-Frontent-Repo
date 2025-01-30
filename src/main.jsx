import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import MainLayout from "./MainLayout.jsx";
import Body from "./components/Body.jsx";
import Products from "./Products.jsx";
import Cart from "./Cart.jsx";
import Signup from "./components/Signup.jsx";
import Contact from "./Contact.jsx";
import ProductDetails from "./ProductDetails.jsx";
import Login from "./components/Login.jsx";
import Payment from "./Payment.jsx";

const MainApp = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Body />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/product/:id"
            element={<ProductDetails setCartItems={setCartItems} />}
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route path="/payment" element={<Payment />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")).render(<MainApp />);
