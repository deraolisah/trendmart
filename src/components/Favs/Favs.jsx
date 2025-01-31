import React from 'react';
import "./Favs.scss";
import CTA from '../CTA/CTA';
import favoriteImg from "/favorite.png";
import { Link } from 'react-router-dom';

const Favs = () => {
  return (
    <div className='favs'>
      <img src={favoriteImg} />
      <h3> No Items in Your Wishlist </h3>
      <p> Browse our store and add items to your wishlist by clicking the heart icon. Save your favourites for later! </p>
      <Link to="/">
        <CTA text="Browse Products" />
      </Link>
    </div>
  )
}

export default Favs;