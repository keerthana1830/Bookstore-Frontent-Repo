import React from "react";
import { Link } from "react-router";
import { books } from "./data";

const Products = () => {
  return (
    <div className="products-container">
      <div className="overlay-products"></div>
      <h1>Products</h1>
      <div className="product-list">
        {books.map((book) => (
          <Link
            to={`/product/${book.id}`}
            key={book.id}
            className="product-card"
          >
            <div className="product-image">
              <img
                src={book.coverImage}
                alt={book.title}
                className="cover-image"
              />
            </div>
            <div className="product-info">
              <h3 className="product-title">{book.title}</h3>
              <p className="author">{book.author}</p>
              <p className="price">{book.price}</p>
              <p className="description">{book.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
