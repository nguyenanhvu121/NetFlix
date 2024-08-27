import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "./index.css";
import next from "./image/arrow.png";
import { useNavigate } from "react-router-dom";
function UnevenSetsInfinite(props) {  
  const navigate = useNavigate();
  const handleGoTile = (sourc) => {
    navigate(`${sourc}`);    
    window.scrollTo(0,0)
  };
  let slidesToScroll = 5;
  const body = document.querySelector("body");
  if (body.offsetWidth < 900) {
    slidesToScroll = 4;
  }
  if (body.offsetWidth < 500) {
    slidesToScroll = 3;
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: slidesToScroll,
    slidesToShow: slidesToScroll,
    swipe: true,
    centerPadding: "50%",
    draggable: true,
    accessibility: true,    
    touchThreshold: 10
  };   
  return props.data.map((result) => (
    <div      
      key={result.id}
      style={{ position: props.position, bottom: props.bottom , width : props.width, margin: props.margin}}
      className="slider-container content-item"
    >
      <div className="title-slider flex">
        <h3>{result.nameGenreFilm}</h3>
        <div className="title-slider-move">
          <div onClick={() =>{
            handleGoTile('./Phim')
          }} className="div flex">
            <p>Xem thêm</p>
            <img style={{ width: "10px" }} src={next} alt="" />
          </div>
        </div>
      </div>
      <Slider {...settings}>
        {result.ListFilm.map((result) =>(
        <div
          key={result.id}
          onClick={() => {
            handleGoTile(result.link);            
          }}                    
        > 
          <h3>
            <img
              className="content-poster-image"
              src = {result.poster}
              alt=""
            />
          </h3>        
        </div>
        ))}
      </Slider>
    </div>
  ));
}

export default UnevenSetsInfinite;
