import React from 'react';
import "./CTA.scss";

const CTA = ({ text, style, onClick }) => {
  return (
    <div className='cta' style={style} onClick={onClick}>
      {text}
    </div>
  );

}

export default CTA;