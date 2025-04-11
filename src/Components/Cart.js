import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div className="container cart-container mt-4">
      <h2 className="mb-4 text-center">🛒 Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <ul className="list-group">
          {cart.map((item, index) => (
            <li
              key={item.id}
              className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-md-center cart-item"
            >
              <div className="d-flex align-items-center mb-3 mb-md-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image me-3"
                />
                <div>
                  <strong>{item.name}</strong>
                  <br />
                  ₹{item.discountedPrice} x {item.quantity} ={" "}
                  <strong>₹{item.discountedPrice * item.quantity}</strong>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-md-end flex-wrap">
                <div className="btn-group mb-2 mb-md-0 me-2" role="group">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    −
                  </button>
                  <span className="btn btn-light disabled">{item.quantity}</span>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="btn btn-danger ms-md-2"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
