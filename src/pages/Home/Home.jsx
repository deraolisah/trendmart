import React from 'react';
import Carousel from "../../components/Carousel/Carousel";
import Products from "../../components/Products/Products";
import Pagination from '../../components/Pagination/Pagination';

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