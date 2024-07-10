import React from 'react';
import "./Footer.scss";

import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { Link } from 'react-router-dom';
import CTA from '../CTA/CTA';
import appstore from '../../../public/app.png';
import playstore from '../../../public/play.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='row'>
        <div className='col'>
          <Link to="/">
            <div className='footer-logo'>TrendMart</div>
          </Link>
          <p> Customer Supports: </p>
          <a href="tel:+234 815 3777 444"> +234 815 3777 444 </a>
          <a href="mailto:info@trendmart.ng"> info@trendmart.ng </a>
          <p> No 4 Madiana Close Off Dar-Es-Salam street, Wuse 2, Abuja </p>
          <div className='apps'>
            <img src={appstore}/>
            <img src={playstore}/>
          </div>
        </div>

        <div className='col'>
          <h4> Category </h4>
          <p><a> Men </a></p>
          <p><a> Women </a></p>
          <p><a> Kids </a></p>
          <p> Follow us: </p>
          <p>
            <FaTwitter className='social-icons' />
            <FaFacebook className='social-icons' />
            <FaPinterestP className='social-icons' />
            <FaInstagram className='social-icons' /> 
          </p>
        </div>

        <div className='col'>
          <h4> Quick links </h4>
          <p><a> Shop Product </a></p>
          <p><a> Shoping Cart </a></p>
          <p><a> Wishlist </a></p>
          <p><a> Track Order </a></p>
          <p><a> Customer Help </a></p>
        </div>

        <div className='col'>
          <h4> Subscribe for Updates </h4>
          <p> Sign up yor email and be the first to know about our special offers and discount. </p>

          <form>
            <input placeholder='Email address' />
            <CTA text='submit' style={{
              borderRadius: "8px",
            }}/>
          </form>
        </div>
      </div>

      <p className='copyrights'>
        Powered by HNG Internship 2024. <br/> Built by: <Link target='_blank' to="https://www.deraolisah.com"> Nathan </Link>
      </p>
    </div>
  )
}

export default Footer;