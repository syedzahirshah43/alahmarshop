import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="product-details">
      <img
        src={product.image}
        alt={product.name}
        className="details-image"
      />

      <div className="details-content">
        <h1>{product.name}</h1>

        <h2>
          PKR {product.price.toLocaleString()}
        </h2>

        <p>
          Premium quality product with fast delivery
          across Pakistan.
        </p>

        <button
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </button>

        <a
          href={`https://wa.me/923349184409?text=I want to order ${product.name}`}
          target="_blank"
          rel="noreferrer"
          className="whatsapp-order"
        >
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default ProductDetails;