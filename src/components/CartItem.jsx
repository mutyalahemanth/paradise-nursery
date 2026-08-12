import React from "react";

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  const itemTotal = item.price * item.quantity;

  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>Price: ₹{item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Total: ₹{itemTotal}</p>
      <div className="cart-actions">
        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
        <button
          onClick={() =>
            item.quantity > 1
              ? onUpdateQuantity(item.id, item.quantity - 1)
              : onRemove(item.id)
          }
        >
          -
        </button>
        <button onClick={() => onRemove(item.id)}>Remove</button>
      </div>
    </div>
  );
};

// Helper function to calculate total cart amount
export const calculateTotalAmount = (items) =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0);

export default CartItem;
