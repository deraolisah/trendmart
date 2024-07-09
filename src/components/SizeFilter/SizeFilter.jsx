import React, { useState } from 'react';
import './SizeFilter.scss';

const sizes = [
  "XS",
  "L",
  "S",
  "XL",
  "M",
  "XXL"
];

const SizeFilter = () => {
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  return (
    <div className="size-filter">
      <h2> Size </h2>
      <form>
        {sizes.map((size) => (
          <div key={size} className="size-option">
            <input
              type="radio"
              id={size}
              name="size"
              value={size}
              checked={selectedSize === size}
              onChange={handleSizeChange}
              className="custom-radio"
            />
            <label htmlFor={size}>{size}</label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default SizeFilter;
