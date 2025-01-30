import { useParams, Link } from "react-router";
import { books } from "./data";
import axios from "axios";

const ProductDetails = ({ cartItems, setCartItems }) => {
  const { id } = useParams();
  const product = books.find((book) => book.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = async () => {
    try {
      const { id, title, author, description, price, coverImage } = product;
      const response = await axios.post("http://localhost:3000/cart", {
        id,
        title,
        author,
        description,
        price,
        coverImage,
        quantity: 1,
      });
      setCartItems((prevItems) => [...prevItems, response.data]);
      alert(`${response.data.title} has been added to your cart!`);
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert("Failed to add product to cart. Please try again.");
    }
  };

  return (
    <div className="product-details">
      <div className="product-card-single">
        <h2>{product.title}</h2>
        <img
          src={product.coverImage}
          alt={product.title}
          className="cover-image"
        />
        <p className="author">Author: {product.author}</p>
        <p className="description">{product.description}</p>
        <p className="price">Price: {product.price}</p>
        <button onClick={handleAddToCart} className="add-to-cart">
          Add to Cart
        </button>
        <Link to="/cart" className="view-cart">
          View Cart
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
