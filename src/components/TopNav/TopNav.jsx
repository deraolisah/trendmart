import React from 'react';
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { BsHeadset } from "react-icons/bs";
import { PiWarningCircleBold } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import "./TopNav.scss";
import { Link } from 'react-router-dom';


const TopNav = () => {
  return (
    <div className='topnav'>
      <div className='left'>
        <p className='follow'> Follow Us: </p>
        <a target='_blank' href="https://twitter.com/"><FaTwitter className='social-icons' /></a>
        <a target='_blank' href="https://facebook.com/"><FaFacebook className='social-icons' /></a>
        <a target='_blank' href="https://pinterest.com/"><FaPinterestP className='social-icons' /></a>
        <a target='_blank' href="https://instagram.com/"><FaInstagram className='social-icons' /></a>
      </div>
      
      <div className='center'>
        <Link to="/track">
          <p><MdLocationPin /> Track Order </p>
        </Link>
        <Link to="/support">
          <p><BsHeadset /> Customer Support </p>
        </Link>

        <p><PiWarningCircleBold /> Need Help ? </p>
      </div>

      <div className='right'>
        <p><a href="tel:+2348123456789"><BsTelephone /> +234 812-3456-789 </a></p>
      </div>
    </div>
  )
}

export default TopNav;