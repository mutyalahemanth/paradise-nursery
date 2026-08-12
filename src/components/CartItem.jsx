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

export const calculateTotalAmount = (items) =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0);

export default CartItem;
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem, { calculateTotalAmount } from "./CartItem";
import { removeItem, updateQuantity } from "../features/cart/CartSlice";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={(id) => dispatch(removeItem(id))}
              onUpdateQuantity={(id, qty) =>
                dispatch(updateQuantity({ id, quantity: qty }))
              }
            />
          ))}
          <h3>Cart Total: ₹{calculateTotalAmount(cartItems)}</h3>
        </>
      )}
    </div>
  );
};

export default CartPage;
