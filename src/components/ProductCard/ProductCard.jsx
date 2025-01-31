import React from 'react';
import './ProductCard.scss';
import CTA from '../CTA/CTA';
import { MdFavoriteBorder, MdFavorite } from "react-icons/md"; 
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useWishlist } from "../../context/WishlistContext"; 
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import { MdAdd, MdRemove } from "react-icons/md";
import { useState } from 'react';

const ProductCard = ({ product }) => {
    const { id, name, oldPrice, price, imageUrl, stock, discount, hot } = product;
    const { cart, addToCart, removeFromCart } = useCart();
    const { wishlist, addToWishlist, removeFromWishlist } = useWishlist(); 

    const [inWishlist, setInWishlist] = useState(false);
    const isInWishlist = wishlist.some(item => item.id === id); 
    const isInCart = cart.some(item => item.id == id);

    // const handleWishlistClick = () => {
        
    //     if (isInWishlist) {
    //         removeFromWishlist(id); // Remove from wishlist
    //     } else {
    //         addToWishlist(product); // Add to wishlist
    //     }
    // };

    const handleWishlistClick = () => {
        // Toggle the wishlist status
        setInWishlist(!inWishlist);
        
        // Here you can add the logic to add or remove the product from the wishlist
        if (!inWishlist) {
            addToWishlist(product); // Add to wishlist logic
        } else {
            removeFromWishlist(id); // Remove from wishlist logic
        }
    };

    const handleCartClick = () => {
        if (isInCart) {
            removeFromCart(id); // Remove from cart
        } else {
            addToCart(product); // Add to cart
        }
    };


    return (
        <div className='card'>
            <img className="product-image" src={imageUrl} alt={name} />
            <Link to={`/product/${id}`} className={`product-info ${stock === 0? 'out-of-stock' : ''} ${discount? 'discount' : ''} ${hot? 'hot' : ''}`}>
                {/* <span className='stars'>
                    <FaStar className='star' />
                    <FaStar className='star' />
                    <FaStar className='star' />
                    <FaStar className='star' />
                    <FaStar className='star' />
                </span> */}
                <h4 className="product-name">{name}</h4>
                <div className='prices'>
                    {oldPrice && <p className="product-old-price">${oldPrice}</p>}
                    <p className="product-price">${price}</p>
                </div>
                {stock === 0 && <p className="out-of-stock-label">Out of Stock</p>}
                {discount && <p className="discount-label">25% off🔥</p>}
                {hot && <p className="hot-label">Hot</p>}
            </Link>

            <div className='card-options'>
                <div className='option'>
                    {isInCart ?
                        <p onClick={handleCartClick} >
                            <MdRemove className='icon' /> 
                            <span> Remove from Cart </span>
                        </p> :
                        <p onClick={handleCartClick} >
                            <MdAdd className='icon' />
                            <span> Add to Cart </span>
                        </p> 
                    }
                    
                    {isInWishlist ? 
                        <p onClick={handleWishlistClick}>
                            <MdFavorite className='icon' />
                            <span> Remove from Wishlist </span>
                        </p> :
                        <p onClick={handleWishlistClick}>
                            <MdFavoriteBorder className='icon' />
                            <span> Add to Wishlist </span>
                        </p>
                    }
                </div>               
            </div>
        </div>
    );
};

export default ProductCard;