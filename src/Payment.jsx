import React, { useState } from "react";
import { useNavigate } from "react-router";

const Payment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to validate form
  const validateForm = () => {
    const newErrors = {};
    const cardRegex = /^[0-9]{16}$/; // 16-digit card number
    const expiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/; // MM/YY format
    const cvvRegex = /^[0-9]{3,4}$/; // 3 or 4-digit CVV
    const nameRegex = /^[A-Za-z\s]+$/; // Name must contain only letters and spaces

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = "Invalid name format";
    }

    // Card number validation
    if (!cardRegex.test(formData.cardNumber)) {
      newErrors.cardNumber = "Card number must be 16 digits";
    }

    // Expiry date validation
    if (!expiryRegex.test(formData.expiry)) {
      newErrors.expiry = "Invalid expiry format (MM/YY)";
    } else {
      const [month, year] = formData.expiry.split("/").map(Number);
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear() % 100;
      const currentMonth = currentDate.getMonth() + 1;

      if (
        year < currentYear ||
        (year === currentYear && month < currentMonth)
      ) {
        newErrors.expiry = "Card is expired";
      }
    }

    // CVV validation
    if (!cvvRegex.test(formData.cvv)) {
      newErrors.cvv = "CVV must be 3 or 4 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Payment Successful!");
      navigate("/"); // Redirect to the home or success page
    }
  };

  return (
    <div className="payment-page">
      <h1>Payment Page</h1>
      <form onSubmit={handleSubmit} className="payment-form">
        <div>
          <label htmlFor="name">Name on Card</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name on card"
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="Enter card number"
            maxLength="16"
            required
          />
          {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
        </div>
        <div>
          <label htmlFor="expiry">Expiration Date</label>
          <input
            type="text"
            id="expiry"
            name="expiry"
            value={formData.expiry}
            onChange={handleChange}
            placeholder="MM/YY"
            required
          />
          {errors.expiry && <p className="error">{errors.expiry}</p>}
        </div>
        <div>
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            placeholder="Enter CVV"
            maxLength="4"
            required
          />
          {errors.cvv && <p className="error">{errors.cvv}</p>}
        </div>
        <button type="submit" className="payment-button">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;
