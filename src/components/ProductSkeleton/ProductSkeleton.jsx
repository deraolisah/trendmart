import React from 'react';
import './ProductSkeleton.scss';

const ProductSkeleton = () => {
  return (
    <div className="product-skeleton">
      <div className="image-placeholder"></div>
      <div className="info-placeholder">
        <div className="title-placeholder"></div>
        <div className="price-placeholder"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;