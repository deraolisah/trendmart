import React from 'react';
import "./Footer.scss";


import { FaTiktok, FaTwitter } from "react-icons/fa6";

import { FaFacebook } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { Link } from 'react-router-dom';
import CTA from '../CTA/CTA';
import appstore from '../../../public/app.png';
import playstore from '../../../public/play.png';
import zIndex from '@mui/material/styles/zIndex';


const Footer = () => {
  return (
    <div className='footer'>
      <div className='subscribe'>
        <h2> Subscribe For Updates </h2>

        <form>
          <input placeholder='Enter your email address' typeof='email' />
          <CTA text='submit' style={{
            borderRadius: "50px",
            maxWidth: "fit-content",
            zIndex: "2",
          }}/>
        </form>
        <p> Sign up with your email and be the first to know about our special offers and discount. </p>
        {/* <p> Get the Latest oraimo News and Giveaways </p> */}
      </div>

      <div className='top'>
        <div className='socials'>
          <p className='follow'> Follow us: </p>
          <p className='icons'>
            <a href="#"><FaTwitter className='social-icons' /></a>
            <a href="#"><FaFacebook className='social-icons' /></a>
            <a href="#"><FaPinterestP className='social-icons' /></a>
            <a href="#"><FaInstagram className='social-icons' /></a>
          </p>  
        </div>

        <div className='apps'>
          <img src={appstore}/>
          <img src={playstore}/>
        </div>
      </div>


      <div className='row'>
        <div className='col'>
          <Link to="/">
            <div className='footer-logo'>TrendMart</div>
          </Link>
          <p> Customer Supports: </p>
          <a href="tel:+234 815 3777 444"> +234 815 3777 444 </a>
          <a href="mailto:info@trendmart.ng"> info@trendmart.ng </a>
          <p> No 24 Mariadne Close Off Namaste street, Wuse 2, Abuja. </p>
        </div>

        <div className='col'>
          <h4> Categories </h4>
          <p><a> Men </a></p>
          <p><a> Women </a></p>
          <p><a> Kids </a></p>

        </div>

        <div className='col'>
          <h4> Quick links </h4>
          <p><a> About Us </a></p>
          <Link to='/cart'>
            <p><a> My Shoping Cart </a></p> 
          </Link>
          <Link to='/favorites'>
            <p><a> My Wishlist </a></p> 
          </Link>
          
        </div>

        <div className='col'>
          <h4> Customer help </h4>
          <Link to='/track'>
            <p><a> Track Order </a></p>
          </Link>
          <Link to='/contact'>
            <p><a> Contact Us </a></p>
          </Link>
          <Link to='/'>
            <p><a> Online Shopping Guide </a></p>
          </Link>

        </div>
      </div>

      <p className='copyrights'>
        Powered by HNG Internship 2024. <br/> Built by: <Link target='_blank' to="https://www.deraolisah.com"> Nathan </Link>
      </p>
    </div>
  )
}

export default Footer;