import React, { useState } from 'react';
import './PriceRangeFilter.scss';

const priceRanges = [
  "All Prices",
  "Under $20",
  "$25 to $100",
  "Above $100"
];

const PriceRangeFilter = () => {
  const [maxPrice, setMaxPrice] = useState(1000);

  const [selectedPrice, setSelectedPrice] = useState("");

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  return (
    <div className="price-range-filter">
      <h3> Price Range </h3>
      <div className="priceItem">
        <input
          type="range"
          min="0"
          max="1000"
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <div className="priceValue">
          <span>$25</span>
          <span>${maxPrice}</span>
        </div>
      </div>
      
      <form>
        {priceRanges.map((priceRange) => (
          <div key={priceRange} className="price-option">
            <input
              type="radio"
              id={priceRange}
              name="priceRange"
              value={priceRange}
              checked={selectedPrice === priceRange}
              onChange={handlePriceChange}
              className="custom-radio"
            />
            <label htmlFor={priceRange}>{priceRange}</label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default PriceRangeFilter;
