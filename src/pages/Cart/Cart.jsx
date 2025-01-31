import React from "react";
import "./Cart.scss";
import { HiOutlineTrash } from "react-icons/hi";
import CTA from "../../components/CTA/CTA";
import QuantityControl from "../../components/QuantityControl/QuantityControl";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext"; // Import the useCart hook

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart(); // Get cart, removeFromCart, and updateQuantity from context

  // Calculate totals
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 0; // Assuming free shipping
  const discount = 24; // Example discount
  const tax = subtotal * 0.1; // Example tax calculation (10%)
  const total = subtotal + shipping - discount + tax;

  // Handle quantity change
  const handleQuantityChange = (id, quantity) => {
    updateQuantity(id, quantity);
  };

  return (
    <div className="main">
      <div className="cart">
        <div className="cart-header">
          <h2>
            Shopping cart <span>{cart.length}</span>
          </h2>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <Link to="/">
              <CTA
                text="< Continue Shopping"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid var(--primary-color)",
                  color: "var(--primary-color)",
                }}
              />
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-subheading">
              <div className="left">
                <h4>Products</h4>
              </div>
              <div className="right">
                <h4>Price</h4>
                <h4>Quantity</h4>
                <h4>Sub-total</h4>
              </div>
            </div>

            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-details">
                  <div className="left">
                    <HiOutlineTrash 
                      className="delete" 
                      onClick={() => removeFromCart(item.id)} 
                      aria-label={`Remove ${item.name} from cart`}
                    />
                    <img src={item.imageUrl} alt={item.name} />
                    <h4>{item.name}</h4>
                  </div>
                  <div className="right">
                    <div className="price col">
                      <h4>
                        <b>${item.price.toFixed(2)}</b>
                      </h4>
                    </div>
                    <div className="col">
                      <QuantityControl 
                        initialQuantity={item.quantity} 
                        maxQuantity={item.stock} 
                        onChange={(quantity) => handleQuantityChange(item.id, quantity)} 
                      />
                    </div>
                    <h4 className="col">
                      <b>${(item.price * item.quantity).toFixed(2)}</b>
                    </h4>
                  </div>
                </div>
              </div>
            ))}

            <div className="side-checkout">
              <div className="checkout-details">
                <h2>Cart Totals</h2>
                <span>
                  <p>Sub-total</p>
                  <p>
                    <b>${subtotal.toFixed(2)}</b>
                  </p>
                </span>
                <span>
                  <p>Shipping</p>
                  <p>
                    <b>${shipping}</b>
                  </p>
                </span>
                <span>
                  <p>Discount</p>
                  <p>
                    <b>-${discount.toFixed(2)}</b>
                  </p>
                </span>
                <span>
                  <p>Tax</p>
                  <p>
                    <b>${tax.toFixed(2)}</b>
                  </p>
                </span>
                <div className="total">
                  <span>Total:</span>
                  <span>
                    <b>${total.toFixed(2)}</b>
                  </span>
                </div>
                <Link to="/checkout">
                  <CTA text="Proceed to Checkout >" />
                </Link>
                <Link to="/">
                  <CTA
                    text="< Continue Shopping"
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid var(--primary-color)",
                      color: "var(--primary-color)",
                    }}
                  />
                </Link>
              </div>

              <div className="coupon">
                <h2>Coupon Code</h2>
                <form>
                  <input type="text" placeholder="Enter Coupon Code" required />
                  <CTA
                    text="Apply Coupon"
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid var(--primary-color)",
                      color: "var(--primary-color)",
                    }}
                  />
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;