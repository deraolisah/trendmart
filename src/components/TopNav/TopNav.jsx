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

const TopNav = () => {
  return (
    <div className='topnav'>
      <div className='left'>
        <p className='follow'> Follow Us: </p>
        <FaTwitter className='social-icons' />
        <FaFacebook className='social-icons' />
        <FaPinterestP className='social-icons' />
        <FaInstagram className='social-icons' />
      </div>
      
      <div className='center'>
        <p><MdLocationPin /> Track Order </p>
        <p><BsHeadset /> Customer Support </p>
        <p><PiWarningCircleBold /> Need Help ? </p>
      </div>

      <div className='right'>
        <p><BsTelephone /> +234 815 377 444 </p>
      </div>
    </div>
  )
}

export default TopNav;