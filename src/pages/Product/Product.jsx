import React from 'react';
import "./Product.scss";
import { Link } from 'react-router-dom';
import CTA from "../../components/CTA/CTA";

const Product = () => {
  return (
    <div className='product'>
      <h1> Show Single Product Here </h1>
      <Link to="/">
        <CTA text="Go Back Home"/>
      </Link>
    </div>
  )
}

export default Product;