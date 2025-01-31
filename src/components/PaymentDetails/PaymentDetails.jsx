import React from "react";
import { Link } from "react-router-dom";
import "./PaymentDetails.scss";
import { CiSquareChevLeft } from "react-icons/ci";
import CTA from "../CTA/CTA";
import mastercard from "../../../public/mastercard.png";
import visa from "../../../public/visa.png";
import paypal from "../../../public/paypal.png";
import amazon from "../../../public/amazon.png";

const PaymentDetails = ({ prevStep, nextStep }) => {
  return (
    <div className="checkout-step">
      <div className="checkout-header">
      <pre>
          <Link onClick={prevStep}>
            <CiSquareChevLeft />
          </Link>
        </pre>
        <h2> Payment Information </h2>
        <p> Step 2 of 3 </p>
      </div>

      <div className="checkout-details">
        <form>
          <div className="form-group">
            <div className="images">
              <label htmlFor="mastercard">
                <img src={mastercard} />
                <p> Master Card </p>
                <input id="mastercard" type="radio" />
              </label>
              <label htmlFor="visa">
                <img src={visa} />
                <p> Visa Card </p>
                <input id="visa" type="radio" />
              </label>
              <label htmlFor="paypal">
                <img src={paypal} />
                <p> Paypal </p>
                <input id="paypal" type="radio" />
              </label>
              <label htmlFor="amazon">
                <img src={amazon} />
                <p> Amazon Pay </p>
                <input id="amazon" type="radio" />
              </label>
            </div>
          </div>
        </form>

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
