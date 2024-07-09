import React from 'react';
import "./CTA.scss";

const CTA = ({ text, style }) => {
  
  return (
    <div className='cta' style={style}>
      {text}
    </div>
  )
}

export default CTA;