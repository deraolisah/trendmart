// import React from 'react';
// import './ProductCard.scss';
// import { MdFavoriteBorder, MdFavorite, MdAdd, MdRemove } from 'react-icons/md';
// import { BsCartPlus } from "react-icons/bs";
// import { Link } from 'react-router-dom';
// import { useCart } from '../../context/CartContext';
// import { useWishlist } from '../../context/WishlistContext';

// const ProductCard = ({ product }) => {
//   const { id, name, oldPrice, price, imageUrl, stock, discount, hot } = product;
//   const { cart, addToCart, removeFromCart } = useCart();
//   const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

//   const isInWishlist = wishlist.some((item) => item.id === id);
//   const isInCart = cart.some((item) => item.id === id);

//   const handleWishlistClick = () => {
//     if (isInWishlist) {
//       removeFromWishlist(id);
//     } else {
//       addToWishlist(product);
//     }
//   };

//   const handleCartClick = () => {
//     if (isInCart) {
//       removeFromCart(id);
//     } else {
//       addToCart(product);
//     }
//   };

//   const isOutOfStock = stock === 0;

//   return (
//     <div className='card'>
//       <img className="product-image" src={imageUrl} alt={name} />
//       <Link to={`/product/${id}`} className={`product-info ${isOutOfStock ? 'out-of-stock' : ''} ${discount ? 'discount' : ''} ${hot ? 'hot' : ''}`}>
//         <h4 className="product-name">{name}</h4>
//         <div className='prices'>
//           {oldPrice && <p className="product-old-price">${oldPrice}</p>}
//           <p className="product-price">${price}</p>
//         </div>
//         {isOutOfStock && <p className="out-of-stock-label">Out of Stock</p>}
//         {discount && <p className="discount-label">25% off🔥</p>}
//         {hot && <p className="hot-label">Hot</p>}
//       </Link>

//       <div className='card-options'>
//         <div className='option'>
//           {isInCart ? (
//             <p onClick={!isOutOfStock ? handleCartClick : undefined} className={isOutOfStock ? 'disabled' : ''} title={isOutOfStock ? 'This product is out of stock' : ''}>
//               <MdRemove className='icon' />
//               <span> Remove from Cart </span>
//             </p>
//           ) : (
//             <p onClick={!isOutOfStock ? handleCartClick : undefined} className={isOutOfStock ? 'disabled' : ''} title={isOutOfStock ? 'This product is out of stock' : ''}>
//               <BsCartPlus className='icon' />
//               <span> Add to Cart </span>
//             </p>
//           )}

//           {isInWishlist ? (
//             <p onClick={!isOutOfStock ? handleWishlistClick : undefined} className={isOutOfStock ? 'disabled' : ''} title={isOutOfStock ? 'This product is out of stock' : ''}>
//               <MdFavorite className='icon' />
//               <span> Remove from Wishlist </span>
//             </p>
//           ) : (
//             <p onClick={!isOutOfStock ? handleWishlistClick : undefined} className={isOutOfStock ? 'disabled' : ''} title={isOutOfStock ? 'This product is out of stock' : ''}>
//               <MdFavoriteBorder className='icon' />
//               <span> Add to Wishlist </span>
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;


import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdFavoriteBorder, MdFavorite, MdRemove } from 'react-icons/md';
import { BsCartPlus } from 'react-icons/bs';
// import { ShopContext } from '../../context/ShopContext.jsx';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  // const {
  //   cart,
  //   wishlist,
  //   addToCart,
  //   removeFromCart,
  //   addToWishlist,
  //   removeFromWishlist,
  // } = useContext(ShopContext);

  const isInWishlist = wishlist.some((item) => item._id === product._id);
  const isInCart = cart.some((item) => item._id === product._id);
  const isOutOfStock = product.stock === 0;

  const handleWishlistClick = () => {
    if (isInWishlist) {
      removeFromWishlist(product._id);
    } else {
      addToWishlist(product);
    }
  };

  const handleCartClick = () => {
    if (isInCart) {
      removeFromCart(product._id);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="card">
      <img
        className="product-image"
        src={product.images[0] || '/default-product.jpg'}
        alt={product.title || 'Product'}
      />
      <Link
        to={`/product/${product._id}`}
        className={`product-info ${
          isOutOfStock ? 'out-of-stock' : ''
        } ${product.discount ? 'discount' : ''} ${product.hot ? 'hot' : ''}`}
      >
        <h4 className="product-name">{product.title}</h4>
        <div className="prices">
          {product.oldPrice && <p className="product-old-price">${product.oldPrice}</p>}
          <p className="product-price">${product.price}</p>
        </div>
        {isOutOfStock && <p className="out-of-stock-label">Out of Stock</p>}
        {product.discount && (
          <p className="discount-label">
            {product.discount}% off
          </p>
        )}
        {product.hot && <p className="hot-label">Hot 🔥</p>}
      </Link>
      <div className="card-options">
        <div className="option">
          <p
            role="button"
            tabIndex={0}
            onClick={!isOutOfStock ? handleCartClick : undefined}
            className={isOutOfStock ? 'disabled' : ''}
            title={isOutOfStock ? 'This product is out of stock' : ''}
            aria-label={isInCart ? 'Remove from Cart' : 'Add to Cart'}
          >
            {isInCart ? (
              <>
                <MdRemove className="icon" />
                <span>Remove from Cart</span>
              </>
            ) : (
              <>
                <BsCartPlus className="icon" />
                <span>Add to Cart</span>
              </>
            )}
          </p>
          <p
            role="button"
            tabIndex={0}
            onClick={!isOutOfStock ? handleWishlistClick : undefined}
            className={isOutOfStock ? 'disabled' : ''}
            title={isOutOfStock ? 'This product is out of stock' : ''}
            aria-label={isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
          >
            {isInWishlist ? (
              <>
                <MdFavorite className="icon" />
                <span>Remove from Wishlist</span>
              </>
            ) : (
              <>
                <MdFavoriteBorder className="icon" />
                <span>Add to Wishlist</span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;