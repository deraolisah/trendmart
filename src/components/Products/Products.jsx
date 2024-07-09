import React, { useState } from 'react';

import "./Products.scss";
import SideFilterMenu from '../SideFilterMenu/SideFilterMenu';
import SortDropdown from '../SortDropdown/SortDropdown';
import CardBox from '../CardBox/CardBox';


import { IoSearch } from "react-icons/io5";
import { LuListFilter } from "react-icons/lu";



const Products = () => {

//   // const catId = parseInt(useParams().id)

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


  return (
    <div className="products">
      <SideFilterMenu isOpen={isMenuOpen} onClose={handleMenuClose} />


      <div className="right">
        <div className="top">
          <div className="search">
            <IoSearch />
            <input type="text" placeholder="Search for anything..."/>
          </div>

          <div className='filters'>
            <h3 className="open-menu-button" onClick={handleMenuOpen}>
              <LuListFilter className='filters-icon'/>
            </h3>

            <div className='sort'>
              {/* <h3> Sort by: </h3> */}
              <SortDropdown options={sortOptions} onSortChange={handleSortChange} />
            </div>
          </div>
        </div>

        <div className='bottom'>
          <CardBox/>
        </div>

      </div>
     
{/* //       <div className="left">
//         <div className="filterItem">
//           <h3>Product Categories</h3>
//           <div className="inputItem">
//             <input type="checkbox" id="1" value={1}/>
//             <label htmlFor="1">Shoes</label>
//           </div>
//           <div className="inputItem">
//             <input type="checkbox" id="2" value={2}/>
//             <label htmlFor="2">Skirts</label>
//           </div>
//           <div className="inputItem">
//             <input type="checkbox" id="3" value={3}/>
//             <label htmlFor="3">Coats</label>
//           </div>
//         </div>
//         <div className="filterItem">
//           <h3>Filter by Price</h3>
//           <div className="inputItem">
//             <span>0</span>
//             <input type="range" min="0" max="1000" onChange={(e)=>setMaxPrice(e.target.value)}/>
//             <span>{maxPrice}</span>
//           </div>
//         </div>
//         <div className="filterItem">
//           <h3>Sort by</h3>
//           <div className="inputItem">
//             <input type="radio" id="asc" value="asc" name="price" onChange={e=>setSort("asc")}/>
//             <label htmlFor="asc">Price (Lowest first)</label>
//           </div>
//           <div className="inputItem">
//             <input type="radio" id="desc" value="desc" name="price" onChange={e=>setSort("desc")}/>
//             <label htmlFor="desc">Price (Highest first)</label>
//           </div>
//         </div>
//       </div>


//       <div className="right">
//         <img src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="catImg" />

//         <List catId={catId} maxPrice={maxPrice} sort={sort} />
//       </div> */}


    </div>
  )
}

export default Products;