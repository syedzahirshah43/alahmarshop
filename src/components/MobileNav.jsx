import { Link } from "react-router-dom";

function MobileNav() {
  return (
    <div className="mobile-nav">
      <Link to="/">🏠 Home</Link>
      <Link to="/products">📦 Products</Link>
      <Link to="/cart">🛒 Cart</Link>
      <Link to="/login">👤 Account</Link>
    </div>
  );
}

export default MobileNav;