import React from 'react';
import "./Footer.scss";
import { FaTiktok, FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import CTA from '../CTA/CTA';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='subscribe'>
        <h2>Subscribe For Updates</h2>
        <form>
          <input placeholder='Enter your email address' type='email' />
          <CTA
            text='submit'
            style={{
              borderRadius: "50px",
              maxWidth: "fit-content",
            }}
          />
        </form>
        <p>
          Sign up with your email and be the first to know about our special offers and discounts.
        </p>
      </div>

      <div className='top'>
        <div className='socials'>
          <p className='follow'>Follow us:</p>
          <div className='icons'>
            <a href="#" title="Twitter">
              <FaTwitter className='social-icons' />
            </a>
            <a href="#" title="Facebook">
              <FaFacebook className='social-icons' />
            </a>
            <a href="#" title="Pinterest">
              <FaPinterestP className='social-icons' />
            </a>
            <a href="#" title="Instagram">
              <FaInstagram className='social-icons' />
            </a>
          </div>
        </div>
        <div className='apps'>
          <img src={'../../../public/app.png'} alt="App Store" />
          <img src={'../../../public/play.png'} alt="Play Store" />
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <Link to="/" className='footer-logo'>
            TrendMart
          </Link>
          <p>Customer Supports:</p>
          <a href="tel:+2348153777444">+234 815 3777 444</a>
          <a href="mailto:info@trendmart.ng">info@trendmart.ng</a>
          <p>No 24 Mariadne Close Off Namaste street, Wuse 2, Abuja.</p>
        </div>

        <div className='col'>
          <h4>Categories</h4>
          <ul>
            <li><Link to="/categories/men">Men</Link></li>
            <li><Link to="/categories/women">Women</Link></li>
            <li><Link to="/categories/kids">Kids</Link></li>
          </ul>
        </div>

        <div className='col'>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/cart">My Shopping Cart</Link></li>
            <li><Link to="/favorites">My Wishlist</Link></li>
          </ul>
        </div>

        <div className='col'>
          <h4>Customer Help</h4>
          <ul>
            <li><Link to="/track">Track Order</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/">Online Shopping Guide</Link></li>
          </ul>
        </div>
      </div>

      <p className='copyrights'>
        Powered by HNG Internship 2024. <br />
        Built by:{" "}
        <a href="https://www.deraolisah.com" target="_blank" rel="noopener noreferrer">
          Nathan
        </a>
      </p>
    </div>
  );
};

export default Footer;