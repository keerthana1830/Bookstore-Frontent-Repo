import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const Cart = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/cart")
      .then((response) => setCartItems(response.data))
      .catch((error) => console.error("Error fetching cart:", error));
  }, []);

  const handleRemoveFromCart = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/cart/${id}`);
      setCartItems(cartItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error removing item from cart:", error);
      alert("Failed to remove item from cart. Please try again.");
    }
  };

  const calculateTotal = () =>
    cartItems.reduce(
      (total, item) => total + parseFloat(item.price.slice(1)) * item.quantity,
      0
    );

  const handleProceedToCheckout = async () => {
    try {
      await axios.post("http://localhost:3000/checkout");
      setCartItems([]);
      alert("Checkout successful!");
      navigate("/");
    } catch (error) {
      console.error("Error proceeding to checkout:", error);
      alert("Failed to proceed to checkout. Please try again.");
    }
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div>
                <h3>{item.title}</h3>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button onClick={() => handleRemoveFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="cart-total">
          <h3>Total: ${calculateTotal().toFixed(2)}</h3>
          <button onClick={handleProceedToCheckout}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
