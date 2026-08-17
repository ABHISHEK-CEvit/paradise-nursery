import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import Navbar from "./components/Navbar";

function Home() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="landing-page background-image">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery, your destination for beautiful
          and healthy houseplants. We offer a wide variety of indoor
          plants to bring freshness, beauty, and nature into your home.
        </p>

        <Link
          to="/plants"
          className="get-started-btn"
          onClick={() => setShowProducts(true)}
        >
          Get Started
        </Link>
      </div>

      {showProducts && null}
    </div>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/plants"
          element={
            <>
              <Navbar />
              <ProductList />
            </>
          }
        />

        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <CartItem />
            </>
          }
        />

        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;