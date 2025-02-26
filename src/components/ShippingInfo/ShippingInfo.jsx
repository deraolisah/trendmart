import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiSquareChevLeft } from "react-icons/ci";
import CTA from '../CTA/CTA';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

const ShippingInfo = ({ prevStep, nextStep }) => {

  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  return (
    <div className="checkout-step">
      <div className='checkout-header'>
        <pre>
          <Link to="/cart" onClick={prevStep}>
            <CiSquareChevLeft />
          </Link>
        </pre>
        <h2> Shipping Information </h2>
        <p> Step 1 of 3 </p>
      </div>

      <div className='checkout-details'>
        <form>
          <div className='form-group'>
            <div className='col'>
              <h3> Country/Region </h3>
              <CountryDropdown
              value={country}
              onChange={(val) => setCountry(val)} 
              style={{
                width: "100%",
                maxWidth: "420px",
                fontSize: "1.4rem",
                minHeight: "40px !important",
                borderRadius: "10px",
                border: "1px solid lightgray",
                padding: "10px 10px",
              }}
              tabIndex={1000}
              />
            </div>
          </div>

          {/* <hr/> */}

          <span> Contact Information </span>      
          <div className='form-group'>
            <div className='col'>
              <label> Full Name </label>
              <input type='text' placeholder='Enter Full Name'/>
              </div>
          </div>

          <div className='form-group flex'>
            <div className='col'>
              <label> Email Address </label>
              <input type='email' placeholder='Enter email address' />
            </div>
            
            <div className='col'>
              <label> Phone Number </label>
              <input type='number' placeholder='+234 Enter phone number'/>
            </div>
          </div>

          {/* <hr/> */}

          <span> address information </span>          
          <div className='form-group flex'>
            <div className='col'>
              <label> Address </label>
              <input type='text' placeholder='Enter street details' />
            </div>
            
            <div className='col'>
              <label> State </label>
              <RegionDropdown
              country={country}
              value={region}
              onChange={(val) => setRegion(val)}
              style={{
                width: "100%",
                minHeight: "40px !important",
                border: "1px solid lightgray",
                borderRadius: "10px",
                padding: "10px",
              }}

              />
            </div>
          </div>
          
          <div className='form-group flex'>
            <div className='col'>
              <label> City </label>
              <input type='text' placeholder='Select city' />
            </div>

            <div className='col'>
              <label> ZIP Code </label>
              <input type='text' placeholder='Enter zip code' />
            </div>
          </div>

          <div className='form-group flex'>
            <input type='checkbox' id='default' />
            <label htmlFor='default'> Set as default shipping address </label>
          </div>


          {/* <hr/> */}

          <span> Additional Information </span>
          <div className='form-group'>

            <label> Additional Information (Optional) </label>
            <textarea placeholder='e.g. special notes for delivery, additional phone number'>
              
            </textarea>
          </div>

</form>
      {/* Shipping form */}
      <div className='buttons'>
        <Link to="/cart" onClick={prevStep}>
          <CTA text="Back" style={{
            backgroundColor: "transparent",
            border: "1px solid var(--primary-color)",
            color: "var(--primary-color)",
          }} />
        </Link>
    
        <Link onClick={nextStep}>
          <CTA text="Next" />
        </Link>
          </div>
        </div>
    </div>
  );
};

export default ShippingInfo;