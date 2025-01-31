import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";

import './SortDropdown.scss';


const SortDropdown = ({ options, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSortChange(option);
    setIsOpen(false);
  };

  return (
    <>
    <div className="sort-dropdown">
      <h3> Sort by: </h3>
      <button className="sort-dropdown__button" onClick={handleToggle}>
        {selectedOption} <MdKeyboardArrowDown className={`icon ${isOpen ? 'open' : ''}`} />
      </button>
      {isOpen && (
        <ul className="sort-dropdown__menu">
          {options.map((option) => (
            <li
              key={option}
              className="sort-dropdown__menu-item"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  );
};

export default SortDropdown;
