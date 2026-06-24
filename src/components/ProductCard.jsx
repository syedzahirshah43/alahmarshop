import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <Link
        to={`/product/${product.id}`}
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <h3>{product.name}</h3>
      </Link>

      <p>PKR {product.price.toLocaleString()}</p>

      <button
        onClick={() => addToCart(product)}
      >
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;