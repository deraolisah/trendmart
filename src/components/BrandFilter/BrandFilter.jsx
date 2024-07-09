import React, { useState } from 'react';
import './BrandFilter.scss';

const brands = [
  "Dior",
  "Fendi",
  "Versace",
  "Gucci",
  "Bonobos",
  "Adidas",
  "Nike",
  "Todd Snyder"
];

const BrandFilter = () => {
  const [selectedBrand, setSelectedBrand] = useState("");

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  return (
    <div className="brand-filter">
      <h2>Popular Brands</h2>
      <form>
        {brands.map((brand) => (
          <div key={brand} className="brand-option">
            <input
              type="radio"
              id={brand}
              name="brand"
              value={brand}
              checked={selectedBrand === brand}
              onChange={handleBrandChange}
              className="custom-radio"
            />
            <label htmlFor={brand}>{brand}</label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default BrandFilter;