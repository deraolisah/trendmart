import React, { useState } from 'react';
import './BrandFilter.scss'

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
  const [selectedBrands, setSelectedBrands] = useState([]); // Initialize with an empty array

  const handleBrandChange = (event) => {
    const brand = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedBrands([...selectedBrands, brand]); // Add brand to the array
    } else {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand)); // Remove brand from the array
    }
  };

  return (
    <div className="brand-filter">
      <h3>Popular Brands</h3>
      <form>
        {brands.map((brand) => (
          <div key={brand} className="brand-option">
            <input
              type="checkbox"
              id={brand}
              name="brand"
              value={brand}
              checked={selectedBrands.includes(brand)} // Check if brand is in the array
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