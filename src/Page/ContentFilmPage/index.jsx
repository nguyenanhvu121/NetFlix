import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
function UnevenSetsFinite(props) {  
  let slidesToScroll = 4;
  const body = document.querySelector("body");
  if (body.offsetWidth < 900) {
    slidesToScroll = 4;
  }
  if (body.offsetWidth < 500) {
    slidesToScroll = 3;
  }
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: slidesToScroll,
    slidesToShow: slidesToScroll
  };
  return (
    props.a.map(result =>(
      <div key={result.id} className="slider-container info-container">
      <Slider {...settings}>
        {result.list.map(result =>(
          <div key={result.id} className="content-film-main">
          <a>
              <img src={result.img} />
          </a>          
        </div>        
        ))}
      </Slider>
    </div>
    ))
  );
}

export default UnevenSetsFinite;
