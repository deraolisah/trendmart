import React from "react";
import { Link } from "react-router-dom";
import "./PaymentDetails.scss";
import CTA from "../CTA/CTA";
import mastercard from "../../../public/mastercard.png";
import visa from "../../../public/visa.png";
import paypal from "../../../public/paypal.png";
import amazon from "../../../public/amazon.png";

const PaymentDetails = ({ prevStep, nextStep }) => {
  return (
    <div className="checkout-step">
      <div className="checkout-header">
        <h2> Payment Information </h2>
        <p> Step 2 of 3 </p>
      </div>

      <div className="checkout-details">
        <div className="form-group">
          <div className="images">
            <img src={mastercard} />
            <img src={visa} />
            <img src={paypal} />
            <img src={amazon} />
          </div>
        </div>

        <div className="buttons">
          <Link onClick={prevStep}>
            <CTA
              text="Back"
              style={{
                backgroundColor: "transparent",
                border: "1px solid var(--primary-color)",
                color: "var(--primary-color)",
              }}
            />
          </Link>

          <Link onClick={nextStep}>
            <CTA text="Next" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
