import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/586/123/original/book-reading-logo-and-symbols-template-icons-vector.jpg"
          alt="Bookstore Logo"
        />
        <h1>Chapters & Verse</h1>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
