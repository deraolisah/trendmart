import React, { useState } from 'react';
import './ColorFilter.scss';

const colors = [
  "Red",
  "Yellow",
  "Blue",
  "Green",
  "White",
  "Black"
];

const ColorFilter = () => {
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div className="color-filter">
      <h2> Color </h2>
      <form>
        {colors.map((color) => (
          <div key={color} className="color-option">
            <input
              type="radio"
              id={color}
              name="color"
              value={color}
              checked={selectedColor === color}
              onChange={handleColorChange}
              className="custom-radio"
            />
            <label htmlFor={color}>{color}</label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default ColorFilter;
