import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/CartSlice";

const plantsArray = {
  Indoor: [
    { id: 1, name: "Aloe Vera", price: 200, description: "Healing plant", thumbnail: "aloe.jpg" },
    { id: 2, name: "Snake Plant", price: 300, description: "Air purifier", thumbnail: "snake.jpg" }
  ],
  Outdoor: [
    { id: 3, name: "Rose", price: 150, description: "Beautiful flower", thumbnail: "rose.jpg" },
    { id: 4, name: "Tulip", price: 250, description: "Colorful bloom", thumbnail: "tulip.jpg" }
  ]
};

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="product-list">
      <h2>Our Plants</h2>
      {Object.keys(plantsArray).map((category) => (
        <div key={category}>
          <h3>{category} Plants</h3>
          <ul>
            {plantsArray[category].map((plant) => (
              <li key={plant.id} className="product-item">
                <img src={plant.thumbnail} alt={plant.name} width="100" />
                <h4>{plant.name}</h4>
                <p>₹{plant.price}</p>
                <p>{plant.description}</p>
                <button onClick={() => dispatch(addItem(plant))}>Add to Cart</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
