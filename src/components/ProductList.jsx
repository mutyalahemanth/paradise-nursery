import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/CartSlice";

const plantsArray = {
  Indoor: [
    { id: 1, name: "Aloe Vera", price: 200, description: "Healing plant", thumbnail: "aloe.jpg" },
    { id: 2, name: "Snake Plant", price: 300, description: "Air purifier", thumbnail: "snake.jpg" },
    { id: 3, name: "Money Plant", price: 250, description: "Brings prosperity", thumbnail: "money.jpg" },
    { id: 7, name: "Peace Lily", price: 280, description: "Purifies air", thumbnail: "peace.jpg" },
    { id: 8, name: "Spider Plant", price: 220, description: "Easy care", thumbnail: "spider.jpg" },
    { id: 9, name: "Orchid", price: 400, description: "Elegant bloom", thumbnail: "orchid.jpg" }
  ],
  Outdoor: [
    { id: 4, name: "Rose", price: 150, description: "Beautiful flower", thumbnail: "rose.jpg" },
    { id: 5, name: "Tulip", price: 250, description: "Colorful bloom", thumbnail: "tulip.jpg" },
    { id: 6, name: "Sunflower", price: 180, description: "Bright and cheerful", thumbnail: "sunflower.jpg" },
    { id: 10, name: "Marigold", price: 120, description: "Festive flower", thumbnail: "marigold.jpg" },
    { id: 11, name: "Hibiscus", price: 200, description: "Tropical bloom", thumbnail: "hibiscus.jpg" },
    { id: 12, name: "Bougainvillea", price: 300, description: "Vibrant climber", thumbnail: "bougainvillea.jpg" }
  ]
};

const ProductList = () => {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
    setAddedItems([...addedItems, plant.id]);
  };

  return (
    <div className="product-list">
      <nav className="navbar">
        <h2>Paradise Nursery</h2>
      </nav>
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
                <button
                  onClick={() => handleAdd(plant)}
                  disabled={addedItems.includes(plant.id)}
                >
                  {addedItems.includes(plant.id) ? "Added" : "Add to Cart"}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProductList;                <button onClick={() => dispatch(addItem(plant))}>Add to Cart</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProductList;      ))}
    </div>
  );
};

export default ProductList;
