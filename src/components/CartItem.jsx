import React from "react";

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>Price: ₹{item.price}</p>
      <p>Quantity: {item.quantity}</p>

      <div className="cart-actions">
        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
          +
        </button>
        <button
          onClick={() =>
            item.quantity > 1
              ? onUpdateQuantity(item.id, item.quantity - 1)
              : null
          }
        >
          -
        </button>
        <button onClick={() => onRemove(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
.cart-item {
  border: 1px solid #ddd;
  margin: 10px;
  padding: 15px;
  border-radius: 6px;
}

.cart-actions button {
  margin: 5px;
  padding: 6px 12px;
  cursor: pointer;
}
import "./CartItem.css";
