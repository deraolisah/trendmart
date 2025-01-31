import React, { useState } from 'react';
import './SortByFilter.scss';

const sortByOptions = [
  "Most Popular",
  "Price: High to Low",
  "Customer Rating",
  "Price: Low to High",
  "Newest"
];

const SortByFilter = () => {
  const [selectedSortBy, setSelectedSortBy] = useState("");

  const handleSortByChange = (event) => {
    setSelectedSortBy(event.target.value);
  };

  return (
    <div className="sort-by-filter">
<<<<<<< HEAD
      <h3> Sort By </h3>
=======
      <h2> Sort By </h2>
>>>>>>> origin/main
      <form>
        {sortByOptions.map((sortByOption) => (
          <div key={sortByOption} className="sort-option">
            <input
              type="radio"
              id={sortByOption}
              name="sortBy"
              value={sortByOption}
              checked={selectedSortBy === sortByOption}
              onChange={handleSortByChange}
              className="custom-radio"
            />
            <label htmlFor={sortByOption}>{sortByOption}</label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default SortByFilter;
