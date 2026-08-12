import React from "react";

const ProductList = ({ products }) => (
  <div className="product-list">
    <h2>Our Plants</h2>
    <ul>
      {products.map((product) => (
        <li key={product.id} className="product-item">
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <p>{product.description}</p>
          <button>Add to Cart</button>
        </li>
      ))}
    </ul>
  </div>
);

export default ProductList;
