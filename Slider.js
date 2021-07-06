import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import { images } from "./sliderdata";
import "./Slider.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "blue" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "blue" }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {    
    const settings = {
      dots: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      infinite: false,
      speed: 200,
      infinite:true,
      dots:false,
      autoplay:true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          speed: 2000,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 2000,
          
        }
      },
      {
        breakpoint:600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 2000,
        }
      }
    ] ,
    
   };
 return (
  <div className="slider">
     <div className="container">
        <Slider {...settings}>
        <div className="column" >
          <img className="image"   src={images[0].img}  height="150" width="150" onClick=""/>
          <p className="name">Donation</p>
        </div> 
        <div className="column">
          <img  className="image"src={images[1].img} height="150" width="150" onClick=""/>
          <p className="name">Home Furniture</p>
        </div> 
        <div className="column">
          <img className="image" src={images[2].img}  height="150" width="150" onClick=""/>
          <p className="name">Legal Services</p>
        </div> 
        <div className="column">
          <img className="image" src={images[3].img}  height="150" width="150" onClick=""/>
          <p className="name">Matrimony</p>
        </div> 
        <div className="column">
          <img className="image" src={images[4].img}  height="150" width="150" onClick=""/>
          <p className="name">Health</p>
        </div> 
        <div className="column">
          <img className="image" src={images[5].img}  height="150" width="150" onClick=""/>
          <p className="name">RealEstate</p>
        </div> 
        <div className="column">
          <img className="image" src={images[6].img} height="150" width="150" onClick=""/>
          <p className="name">Store</p>
        </div> 
        <div className="column">
          <img className="image" src={images[7].img}  height="150" width="150"onClick=""/>
          <p className="name">Sports</p>
        </div> 
        <div className="column">
          <img className="image" src={images[8].img} height="150" width="150" onClick=""/>
          <p className="name">Student Services</p>
        </div> 
        
        </Slider>
      </div>

  </div>
     
    );
  }
}

