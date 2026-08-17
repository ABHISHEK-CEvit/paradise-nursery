import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Coming Soon!");
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>

          <p>
            Add some beautiful plants to your cart to get started.
          </p>

          <Link to="/plants" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-summary">
            <h2>Total Plants: {totalItems}</h2>
            <h2>Total Cost: ₹{totalCost}</h2>
          </div>

          <div className="cart-items">
            {cartItems.map((item) => {
              const itemTotal = item.price * item.quantity;

              return (
                <div className="cart-card" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-image"
                  />

                  <div className="cart-item-info">
                    <h2>{item.name}</h2>

                    <p>Unit Price: ₹{item.price}</p>

                    <p>
                      Item Total: ₹{itemTotal}
                    </p>

                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          dispatch(decreaseQuantity(item.id))
                        }
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          dispatch(increaseQuantity(item.id))
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        dispatch(removeItem(item.id))
                      }
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="cart-actions">
            <Link
              to="/plants"
              className="continue-shopping-btn"
            >
              Continue Shopping
            </Link>

            <button
              className="checkout-btn"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;