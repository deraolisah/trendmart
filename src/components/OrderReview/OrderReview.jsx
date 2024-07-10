import React from 'react';
import { Link } from 'react-router-dom';
import CTA from '../CTA/CTA';
import Cart from "../Cart/Cart";
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
          <h1> All Added Items Will Be Displayed Here </h1>
          <br/>
          <p> My Laptop is already low, so I might not be able to finish up with my final touches before the review of my work. </p>
          😓😓😓😫😭 :(
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
            <CTA className="cta" text="Place order" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
