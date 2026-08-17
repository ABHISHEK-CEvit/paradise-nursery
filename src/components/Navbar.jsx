import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">🌿 Paradise Nursery</Link>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>

        <Link to="/cart" className="cart-link">
          🛒 Cart ({totalItems})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;