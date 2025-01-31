import React from 'react';
import "./Favorites.scss";
import CTA from '../../components/CTA/CTA';
import favoriteImg from "/favorite.png";
import { Link, useNavigate } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';
import { MdDelete } from 'react-icons/md';

const Favorites = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    // Navigate to the specific product details page
    navigate(`/product/${productId}`);
  };

  const handleRemoveFromWishlist = (productId, e) => {
    // Prevent triggering the product click event
    e.stopPropagation();
    removeFromWishlist(productId);
  };

  return (
    <section className='favorites-container'>
      <div className='favorites-header'>
        {/* <h2>My Wishlist</h2> */}
        <span className='wishlist-count'>
          {wishlist.length} Item{wishlist.length !== 1 ? 's' : ''}
        </span>
      </div>

      {wishlist.length === 0 ? (
        <div className='empty-wishlist'>
          <img src={favoriteImg} alt="Empty Wishlist" />
          <h3>No Items in Your Wishlist</h3>
          <p>Browse our store and add items to your wishlist by clicking the heart icon. Save your favourites for later!</p>
          <Link to="/">
            <CTA text="Browse Products" />
          </Link>
        </div>
      ) : (
        <div className='wishlist-grid'>
          {wishlist.map((item) => (
            <div 
              key={item.id} 
              className='wishlist-item'
              onClick={() => handleProductClick(item.id)}
            >
              <div className='wishlist-item-image'>
                <img src={item.imageUrl} alt={item.name} />
                <button 
                  className='remove-from-wishlist'
                  onClick={(e) => handleRemoveFromWishlist(item.id, e)}
                >
                  <MdDelete />
                </button>
              </div>
              
              <div className='wishlist-item-details'>
                <h4>{item.name}</h4>
                <div className='wishlist-item-pricing'>
                  {item.oldPrice && (
                    <span className='old-price'>${item.oldPrice.toFixed(2)}</span>
                  )}
                  <span className='current-price'>${item.price.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Favorites;