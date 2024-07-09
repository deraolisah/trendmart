import React from 'react';
import "./Hero.scss";
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import { useState } from "react";

const Hero = () => {
 
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [ 
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="hero">
      
      <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} />
        <img src={data[1]} />
        <img src={data[2]} />
      </div>
      
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon/>
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon/>
        </div>
      </div>
    </div>
  )
}

export default Hero;