import React, { useState } from "react";
import { Link } from "react-router-dom"; 

import { FaAngleDown } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { PiShoppingCartSimple } from "react-icons/pi";
import { HiOutlineUser } from "react-icons/hi2";


import "./Nav.scss";

const Nav = () => {
  const [open, setOpen] = useState(false);
  
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
        {/* <div className="country">
          <img src={flag} />
          NGN
          <div className="nav-icons drop-down">
            <FaAngleDown />
          </div>
        </div> */}

        <div className="nav-options">
          <Link to='/favorites' className="nav-icons icon">
            <MdFavoriteBorder />
          </Link>
          <Link to="/cart" className="nav-icons icon">
            <PiShoppingCartSimple />
            <span>4</span>
          </Link>
          <div className="nav-icons">
            <HiOutlineUser />
          </div>
          <div className="user-name">
            <p> Chioma </p>
            <FaAngleDown className="drop-down"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;