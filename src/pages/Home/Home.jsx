import React from 'react';

import Carousel from "../../components/Carousel/Carousel";
import Products from "../../components/Products/Products";
import Pagination from '../../components/Pagination/Pagination';
// import ProductsPage from '../../components/ProductsPage/ProductsPage';

const Home = () => {
  return (
    <div className='home'>
      <Carousel/>
      <Products/>
      <Pagination/>
    </div>
  )
}

export default Home;