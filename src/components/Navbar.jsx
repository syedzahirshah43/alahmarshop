import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar({ searchTerm, setSearchTerm }) {
  const { cart } = useCart();

  return (
    <header>
      <div className="logo">AlahmarShop</div>

      <input
        type="text"
        placeholder="Search products..."
        className="search-input"
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
      />

      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>

        <Link to="/cart">
          Cart ({cart.length})
        </Link>

        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}

export default Navbar;