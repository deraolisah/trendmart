import React, { useState } from 'react';
import './CategoryFilter.scss';

const categories = [
  "Women",
  "Men",
  "Kids"
];

const CategoryFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="category-filter">
      <h3> Category </h3>
      <form>
        {categories.map((category) => (
          <div key={category} className="category-option">
            <input
              type="radio"
              id={category}
              name="category"
              value={category}
              checked={selectedCategory === category}
              onChange={handleCategoryChange}
              className="custom-radio"
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default CategoryFilter;
