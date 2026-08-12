import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="landing-page">
      <h1>Welcome to Paradise Nursery</h1>
      <p>Browse plants, view details, and shop with ease.</p>
      <button className="get-started" onClick={() => setShowProductList(true)}>
        Get Started
      </button>
      {showProductList && <ProductList />}
    </div>
  );
}

export default App;
