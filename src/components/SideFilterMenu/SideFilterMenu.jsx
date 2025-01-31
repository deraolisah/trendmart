import React, { useState } from "react";
import "./SideFilterMenu.scss";
import CTA from '../../components/CTA/CTA';
import BrandFilter from '../../components/BrandFilter/BrandFilter';
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import ColorFilter from "../ColorFilter/ColorFilter";
import SizeFilter from "../SizeFilter/SizeFilter";
import PriceRangeFilter from "../PriceRangeFilter/PriceRangeFilter";
import SortByFilter from "../SortByFilter/SortByFilter";

const SideFilterMenu = ({ isOpen, onClose }) => {
  const [maxPrice, setMaxPrice] = useState(1000);

  // const [sort, setSort] = useState(null);

  return (
    <>
      <div
        className={`overlay ${isOpen ? "open" : ""}`}
        onClick={onClose}
      ></div>
      <div className={`side-filter-menu ${isOpen ? "open" : ""}`}>
        <div className="filter-header">
          <h3> Filters </h3>
          <button className="side-filter-menu__close-button" onClick={onClose}>
            Close
          </button>
        </div>

        <SortByFilter />

        <CategoryFilter />

        <hr/>

        <SizeFilter />

        <hr/>

        <PriceRangeFilter />

        <hr/>

        <ColorFilter />

        <hr/>

        <BrandFilter />

        <div className="btns">
          <CTA text="Reset" style={{
            backgroundColor: 'transparent',
            color: 'var(--primary-color)',
            border: '0.8px solid var(--primary-color)',
            }}
            />
          <CTA text="Apply"/>
        </div>
      </div>
    </>
  );
};

export default SideFilterMenu;
