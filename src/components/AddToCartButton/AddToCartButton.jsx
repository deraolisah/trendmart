import React from 'react';
// import { PiShoppingCartSimple } from "react-icons/pi";
import { IoAddSharp } from "react-icons/io5";
import { useCart } from "../../context/CartContext";
import CTA from '../CTA/CTA'; // Import the CTA component

const AddToCartButton = ({ product, showIcon = true, showText = true }) => {
  const { addToCart } = useCart();

  const handleClick = () => {
    addToCart(product);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleClick}>

      {showIcon && <IoAddSharp className='icon' style={{ marginRight: showText ? '8px' : '0', display: showText ? "none" : "flex" }} />}

      {showText && (
        <CTA 
          text="Add to Cart" 
          style={{ 
            backgroundColor: 'var(--primary-color)', // Example style
            color: 'white', // Example text color
            padding: '10px 20px', // Example padding
            textAlign: 'center' // Center text
          }} 
        />
      )}
    </div>
  );
};

export default AddToCartButton;