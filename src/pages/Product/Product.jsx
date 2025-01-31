// src/components/Product.js

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { PiShoppingCartSimple } from "react-icons/pi";
import { MdFavoriteBorder } from "react-icons/md";
import "./Product.scss";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [inWishlist, setInWishlist] = useState(false);
  const [error, setError] = useState(null); // State for error handling
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/${productId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setError("Failed to load product data. Please try again later.");
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>; // Consider using a spinner here
  }

  if (error) {
    return <div>{error}</div>; // Display error message to the user
  }

  const handleWishlistClick = () => {
    setInWishlist(!inWishlist);
  };

  return (
    <div className="product">
      <nav className="breadcrumb">
        <Link to="/">Home</Link>
        <span> » </span>
        <Link to={`/product/${product.id}`}>Product</Link>
      </nav>

      <div className='product-content'>
        <div className="image-gallery">
          <div className="main-image">
            <img src={product.images[selectedImg]} alt={product.title} />
          </div>
          <div className="thumbnail-images">
            {product.images.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`Thumbnail ${index + 1}`} 
                onClick={() => setSelectedImg(index)} 
                className={selectedImg === index ? 'active' : ''}
              />
            ))}
          </div>
        </div>

        <div className="product-details">
          <h2 className="product-title">{product.title}</h2>
          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className='star' />
            ))}
          </div>
          <span className="price">${product.price}</span>
          <p className="description">{product.description}</p>

          <div className="actions">
            <button className="cta add-to-cart" aria-label="Add to cart">
              <PiShoppingCartSimple /> ADD TO CART
            </button>
            <button 
              className="cta add-to-wishlist" 
              onClick={handleWishlistClick}
              aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
            >
              {inWishlist ? "Remove from wishlist" : "Add to wishlist"}
              <MdFavoriteBorder />
            </button>
          </div>

          <div className="quantity">
            <b>Qty: </b>
            <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </div>
        </div>
      </div>

      <div className="additional-info">
        <span>Vendor: {product.vendor}</span>
        <span>Product Type: {product.type}</span>
        <span>Tags: {product.tags.join(', ')}</span>
        <hr />
        <div className="info-sections">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;