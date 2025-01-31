import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Products.scss";
import SideFilterMenu from '../SideFilterMenu/SideFilterMenu';
import SortDropdown from '../SortDropdown/SortDropdown';
import CardBox from '../CardBox/CardBox';
import { CartProvider } from '../../context/CartContext';

import { IoSearch, IoFilter } from "react-icons/io5";

// import { IoFilter } from "react-icons/io5";
// import { MdFilterList } from "react-icons/md";
// import IoSearch from "react-icons/io5";
// import IoListFilter from "react-icons/io5";

const Products = () => {
  const { id: catId } = useParams();

  // SIDE MENU FILTER
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  // PRODUCT SORTING
  const [sortOption, setSortOption] = useState('Default');
  const handleSortChange = (option) => {
    setSortOption(option);
    // Add your sort functionality here
    console.log(`Selected sort option: ${option}`);
  };
  const sortOptions = ['Most Popular', 'Newest Arrivals', 'Customer Rating', 'Price: High to Low', 'Price: Low to High'];

  // FILTER BY PRICE
  const [maxPrice, setMaxPrice] = useState(0);

  // SORT BY
  const [sort, setSort] = useState('');


  return (
    <div className="products">
      <SideFilterMenu isOpen={isMenuOpen} onClose={handleMenuClose} />

      <div className="right">
        <div className="top">
          <form className="search">
            <button>
              <IoSearch className='search-icon' />
            </button>
            <input type="search" placeholder="Search for anything..."/>
          </form>

          <div className='filters'>
            <h3 className="open-menu-button" onClick={handleMenuOpen}>
            {/* <MdFilterList className='filters-icon' /> */}
            <IoFilter className='filters-icon' />
              {/* <IoListFilter className='filters-icon'/> */}

            </h3>

            <div className='sort'>
              {/* <h3> Sort by: </h3> */}
              <SortDropdown options={sortOptions} onSortChange={handleSortChange} />
            </div>
          </div>
        </div>

        <div className='bottom'>
          <CartProvider>
            <CardBox />
            {/* other components */}
          </CartProvider>
        </div>
      </div>

    </div>
  )
}

export default Products;