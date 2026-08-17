import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import plants from "../data/plants";

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div className="product-page">
      <h1>Our Houseplants</h1>

      <p className="product-intro">
        Discover beautiful plants to bring freshness and nature into your home.
      </p>

      {categories.map((category) => (
        <section className="plant-category" key={category}>
          <h2>{category}</h2>

          <div className="plant-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div className="plant-card" key={plant.id}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="plant-image"
                  />

                  <div className="plant-info">
                    <h3>{plant.name}</h3>

                    <p className="plant-price">
                      ₹{plant.price}
                    </p>

                    <button
                      onClick={() => dispatch(addItem(plant))}
                      disabled={isInCart(plant.id)}
                      className="add-cart-btn"
                    >
                      {isInCart(plant.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;