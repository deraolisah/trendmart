import React from 'react';
import { useCart } from "../../context/CartContext";

const CartIcon = () => {
  const { cart } = useCart();

  return (
    <div className="cart-icon">
      <span>{cart.reduce((total, item) => total + item.quantity, 0)}</span>
    </div>
  );
};

export default CartIcon;