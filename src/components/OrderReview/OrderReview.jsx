import React from 'react';
import { Link } from 'react-router-dom';
import CTA from '../CTA/CTA';
import './OrderReview.scss';
// import Cart from "../Cart/Cart";
import { CiSquareChevLeft } from "react-icons/ci";

const OrderReview = ({ prevStep, submitOrder }) => {
  return (
    <div className="checkout-step">
      <div className='checkout-header'>
        <pre>
          <Link onClick={prevStep}>
            <CiSquareChevLeft />
          </Link>
        </pre>
        <h2> Order Review </h2>
        <p> Step 3 of 3 </p>
      </div>

      <div className='checkout-details'>
        <div className='form-group' style={{ margin: '20px auto', textAlign: "center", lineHeight: "4rem", }}>
          <div className='total'>
            <h3> Total </h3>
            
            <div>
              <p style={{
                color: "var(--primary-color)",
                fontWeight: "600",
                fontSize: "1.8rem",
              }}> 
                $2,585.99 USD 
              </p>

              <p>
                Sub-total $2,500 • Discount $24 • Tax $61.99
              </p>
            </div>
          </div>

          <div className='orders'>
            <h1> All Added Items Will Be Displayed Here </h1>
            <br/>
            <p> My Laptop is already low, so I might not be able to finish up with my final touches before the review of my work. </p>
            😓😓😓😫😭 :(
          </div>
        </div>

        <div className='buttons'>
          <Link onClick={prevStep}>
            <CTA className="cta" text="Back" style={{
              backgroundColor: "transparent",
              border: "1px solid var(--primary-color)",
              color: "var(--primary-color)",
            }}/>
          </Link>
      
          <Link onClick={submitOrder}>
            <CTA text="Place order" style={{
              padding: "10px 25px",
              border: "1px solid var(--primary-color)",
            }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
