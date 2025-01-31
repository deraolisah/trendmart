import React, { useEffect, useRef } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import './Carousel.scss'; 


const Carousel = () => {
  const carouselRef = useRef(null);

  const data = [ 
    "https://images.unsplash.com/photo-1546213290-e1b492ab3eee?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];


  useEffect(() => {
    const flkty = new Flickity(carouselRef.current, {
      cellAlign: 'center',
      contain: true,
      wrapAround: true,
      freeScroll: false,
      pageDots: true,
      autoPlay: 3500,
      prevNextButtons: true,
    });

    // Cleanup Flickity instance on component unmount
    return () => {
      flkty.destroy();
    };
  }, []);


  return (
    <div className="carousel" ref={carouselRef}>
      <div className="carousel-cell">
        <img src={data[0]} />
      </div>
      <div className="carousel-cell">
        <img src={data[1]} />      
      </div>
      <div className="carousel-cell">
        <img src={data[2]} />
      </div>
    </div>
  );
};

export default Carousel;