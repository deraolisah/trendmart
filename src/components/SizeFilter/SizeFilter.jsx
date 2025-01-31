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
<<<<<<< HEAD
      <h3> Size </h3>
=======
      <h2> Size </h2>
>>>>>>> origin/main
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
