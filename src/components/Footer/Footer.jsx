import React from 'react';
import "./Footer.scss";
import { Link } from 'react-router-dom';

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
          <p> info@trendmart.ng </p>
          <p> No 4 Madiana Close Off Dar-Es-Salam street, Wuse 2, Abuja </p>
        </div>
        <div className='col'>
          <h4> Category </h4>
          <p><a> Men </a></p>
          <p><a> Women </a></p>
          <p><a> Kids </a></p>
          <p> Follow us: </p>
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
          <button type='submit'> Submit </button>
        </form>
        </div>
      </div>
      <p>
        Powered by HNG Internship 2024
      </p>
    </div>
  )
}

export default Footer;