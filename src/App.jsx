import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/Header";
import Body from "./components/Body";
import Login from "./components/Login";
import { useState } from "react";
// import Products from "./Products";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Products from "./Products";
import axios from "axios";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // Sync cart data from backend when the app loads
  useEffect(() => {
    axios
      .get("http://localhost:3000/cart")
      .then((response) => setCartItems(response.data))
      .catch((err) => console.error("Error fetching cart data:", err));
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Body />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/product/:id"
          element={<ProductDetails setCartItems={setCartItems} />}
        />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
        />
        {/* Other routes */}
      </Routes>
    </>
  );
};

export default App;
