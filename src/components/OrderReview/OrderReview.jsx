import React from 'react';
import { Link } from 'react-router-dom';
import CTA from '../CTA/CTA';

const OrderReview = ({ prevStep, submitOrder }) => {
  return (
    <div className="checkout-step">
      <div className='checkout-header'>
        <h2> Order Review </h2>
        <p> Step 3 of 3 </p>
      </div>

      <div className='checkout-details'>
      {/* Order review details */}
      <div className='buttons'>
        <Link onClick={prevStep}>
          <CTA text="Back" style={{
            backgroundColor: "transparent",
            border: "1px solid var(--primary-color)",
            color: "var(--primary-color)",
          }}/>
        </Link>
    
        <Link onClick={submitOrder}>
          <CTA text="Place order" />
        </Link>
      </div>
        </div>
    </div>
  );
};

export default OrderReview;
