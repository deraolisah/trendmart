import React from 'react'
import "./CartPage.scss";
import TopNav from '../../components/TopNav/TopNav';
import Nav from '../../components/Nav/Nav';
import Cart from '../../components/Cart/Cart';

const CartPage = () => {
  return (
    <div className='cartPage'>
      <Cart/> 
    </div>
  )
}

export default CartPage;