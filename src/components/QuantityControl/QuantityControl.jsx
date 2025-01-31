import React, { useState } from 'react';
import './QuantityControl.scss';

const QuantityControl = ({ initialQuantity = 1, maxQuantity }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  return (
    <div className="quantity">
      <button
        onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
        disabled={quantity === 1}
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        onClick={() => setQuantity((prev) => (prev < maxQuantity ? prev + 1 : prev))}
        disabled={quantity === maxQuantity}
      >
        +
      </button>
    </div>
  );
};

export default QuantityControl;