import React, { useState } from "react";
import "./Cart.scss";
import CTA from '../CTA/CTA';
import QuantityControl from "../QuantityControl/QuantityControl";
import { Link } from "react-router-dom";

// import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

// const CartItem = ({ item }) => {
//   return (
//     <div>
//       <h2>{item.title}</h2>
//       <QuantityControl initialQuantity={1} maxQuantity={item.stock} />
//     </div>
//   );
// };

const Cart = () => {
  const [quantity, setQuantity] = useState(2)
  
  
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-shirt",
      desc: "Lorem ipsum dolor sint",
      isNew: true,
      oldPrice: 19,
      price: 120,
      stock: 10,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      desc: "Lorem sint",
      isNew: true,
      oldPrice: 19,
      price: 12,
      stock: 5,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      desc: "Lorem sint",
      isNew: true,
      oldPrice: 19,
      price: 12,
      stock: 8,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      desc: "Lorem sint",
      isNew: true,
      oldPrice: 19,
      price: 12,
      stock: 12,
    },
  ]

  const maxStock = data[1].stock; // Example max stock

  return (
    <div className="main">
      <div className="cart">
        <div className="cart-header">
          <h3> Shopping cart <span>4</span></h3>
        </div>
        <div className="cart-subheading">
          <h4> Products </h4>
          <h4> Price </h4>
          <h4> Quantity </h4>
          <h4> Sub-total </h4>
        </div>
        {data?.map(item=>(
          <div className="cart-item" key={item.id}>
            <img src={item.img} alt="" />
            
            <div className="details">
              <h4>{item.title}</h4>
              <div className="price">
                ${item.price}
              </div>
              <QuantityControl initialQuantity={1} maxQuantity={item.stock} />
              <h4>${item.price * quantity}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className="side-checkout">
        <div className="checkout-details">
          <h3> Cart Totals </h3>
          <span>
            <p> Sub-total </p>
            <p><b> $123 </b></p>
          </span>
          <span>
            <p> Shipping </p>
            <p><b> Free </b></p>
          </span>
          <span>
            <p> Discount </p>
            <p><b> $24 </b></p>
          </span>
          <span>
            <p> Tax </p>
            <p><b> $61.99 </b></p>
          </span>
          <div className="total">
            <span> Total: </span>
            <span><b> $1230 </b></span>
          </div>
          <Link to='/checkout'>
            <CTA text="Proceed to Checkout >" />
          </Link>
          <Link to='/'>
            <CTA text="< Continue Shopping" 
              style={{ backgroundColor: 'transparent', 
                border: '1px solid var(--primary-color)',
                color: 'var(--primary-color' }} 
            />
          </Link>
          {/* <span className="reset"> Reset Cart </span> */}
        </div>

        <div className="coupon">
          <h3> Coupon Code </h3>
          <form>
            <input type="text" placeholder="Enter Coupon Code" required/>

            <CTA text="Apply Coupon" 
            style={{
              backgroundColor: 'transparent',
              border: '1px solid var(--primary-color)',
              color: 'var(--primary-color)' }} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;
