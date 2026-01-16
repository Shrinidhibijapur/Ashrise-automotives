import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

export default function Cart() {
  const { cartItems } = useContext(CartContext);

  // calculate total
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <span className="item-name">{item.name}</span>
                <span className="item-price">₹{item.price}</span>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h2>Total Amount: ₹{totalAmount}</h2>
          </div>
        </>
      )}
    </div>
  );
}
