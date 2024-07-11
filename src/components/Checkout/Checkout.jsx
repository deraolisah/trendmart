import React, { useState } from 'react';
import ShippingInfo from '../../components/ShippingInfo/ShippingInfo';
import PaymentDetails from '../../components/PaymentDetails/PaymentDetails';
import OrderReview from '../../components/OrderReview/OrderReview';
import './Checkout.scss';
// import Cart from '../Cart/Cart';

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const submitOrder = () => {
    // Submit order logic
    alert('Your Order Has Been Placed Succesfully!');
  };

  switch (currentStep) {
    case 1:
      return <ShippingInfo prevStep={prevStep} nextStep={nextStep} />;
      case 2:
        return <PaymentDetails prevStep={prevStep} nextStep={nextStep} />;
        case 3:
          return <OrderReview prevStep={prevStep} submitOrder={submitOrder} />;
          default:
            return <ShippingInfo prevStep={prevStep} nextStep={nextStep} />;
            
  }
};

export default Checkout;
