import React from 'react';
import './Card.scss';
import CTA from '../CTA/CTA';

import { MdFavoriteBorder } from "react-icons/md";
import { PiShoppingCartSimple } from "react-icons/pi";
import { HiStar } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
    const { id, name, oldPrice, price, imageUrl, stock, discount, hot } = product;

    return (
        <Link to={'/product/{id}'} className={`card ${stock === 0 ? 'out-of-stock' : ''} ${discount ? 'discount' : ''} ${hot ? 'hot' : ''}`}>
            <img className="product-image" src={imageUrl} alt={name} />
            <div className="product-info">
                {/* <h2 style={{display = none}}>{id}</h2> */}
                <span className='stars'>
                    <HiStar className='star' />
                    <HiStar className='star' />
                    <HiStar className='star' />
                    <HiStar className='star' />
                </span>
                <h3 className="product-name">{name}</h3>
                <div className='prices'>
                    <p className="product-old-price">${oldPrice}</p>
                    <p className="product-price">${price}</p>
                </div>
                {stock === 0 && <p className="out-of-stock-label">Out of Stock</p>}
                {discount && <p className="discount-label">25% off🔥</p>}
                {hot && <p className="hot-label">Hot</p>}
            </div>
            <div className='card-options'>
                <div className='option'>
                    <MdFavoriteBorder className='icon' />
                    <PiShoppingCartSimple className='icon' />
                </div>
                <div className='option option-2'>
                    <Link to='/cart'>
                        <CTA className="cta" text="Add to cart" />
                    </Link>
                    <Link to='/favorites'>
                        <CTA className="cta" text="Add to wishlist" style={{ 
                            backgroundColor: 'transparent', 
                            border: '1px solid var(--primary-color)',
                            color: 'var(--primary-color', }}
                        />
                    </Link>
                </div>
            </div>
        </Link>
    );
};

export default Card;
