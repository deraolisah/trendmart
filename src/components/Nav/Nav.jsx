import React from "react";
import { Link } from "react-router-dom"; 
import "./Nav.scss";
import { MdFavoriteBorder } from "react-icons/md";
import { PiShoppingCartSimple } from "react-icons/pi";
import AccountDropdown from "../AccountDropdown/AccountDropdown";
import { useWishlist } from "../../context/WishlistContext";
import { useShopContext } from "../../context/ShopContext";


const Nav = () => {

  const { cart, wishlist } = useShopContext();
  

  
  return (
    <div className="nav">
      <Link className="logo" to="/"> TrendMart </Link>

      <input type="checkbox" id="menuBtn" />

      <label htmlFor="menuBtn" aria-label="Toggle menu">

        <span></span>
        <span></span>
        <span></span>
      </label>

      <div className="right">
        <div className="nav-options">
          <Link to='/favorites' className="nav-icons icon">
            <MdFavoriteBorder />

            {wishlist.length > 0 && <span className="fav-value">{wishlist.length}</span>} {/* Show count if > 0 */}
          </Link>
          <Link to="/cart" className="nav-icons icon">
            <PiShoppingCartSimple />
            {cart.length > 0 && <span className="cart-value">{cart.length}</span>} {/* Show count if > 0 */}
          </Link>
          <div className="user-name">
            <AccountDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;