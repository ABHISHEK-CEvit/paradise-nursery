import { Routes, Route, Link } from "react-router-dom";

import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

import "./App.css";

function Home() {
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <h1>Paradise Nursery</h1>

        <AboutUs />

        <Link to="/plants" className="get-started-btn">
         Get Started
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
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
    </Routes>
  );
}

export default App;