import React from "react";
import { Link } from "react-router-dom"; 

import "./Nav.scss";

import { MdFavoriteBorder } from "react-icons/md";
import { PiShoppingCartSimple } from "react-icons/pi";

import AccountDropdown from "../AccountDropdown/AccountDropdown";


const Nav = () => {
  
  return (
    <div className="nav">
      <Link className="logo" to="/"> TrendMart </Link>

      <input type="checkbox" id="menuBtn" />
      <label htmlFor="menuBtn">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <div className="right">
        <div className="nav-options">
          <Link to='/favorites' className="nav-icons icon">
            <MdFavoriteBorder />
          </Link>
          <Link to="/cart" className="nav-icons icon">
            <PiShoppingCartSimple />
            <span>4</span>
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