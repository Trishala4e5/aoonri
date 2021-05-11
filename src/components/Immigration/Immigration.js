import "./Immigration.css";
import React, { Component } from "react";
import Slider from "react-slick";



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
  export default class Immigration extends Component {
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
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            speed: 2000,
            dots: false
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
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
    <div className="sliders">
        <h3>Immigration</h3>
        <hr></hr>
       <div className="containers">
          <Slider {...settings}>
          <div className="columns" >
            <div className="innercol" width="150" height="250">
                <p className="name">Common Discussion</p><br/>
                <button>View Response</button>
            </div>            
          </div> 
          <div className="columns"> 
            <div className="innercol" width="150" height="150">
                <p className="name">New Interim Final Rule</p><br/>
                <button>View Response</button>
            </div>            
          </div> 
          <div className="columns">  
            <div className="innercol" width="150" height="150" >
                <p className="name">International Students Visas</p><br/>
                <button>View Response</button>
            </div>           
          </div> 
          <div className="columns">   
            <div className="innercol" width="150" height="150">
                <p className="name">Post GC-US citizenship</p><br/>
                <button>View Response</button>
            </div>              
          </div> 
          <div className="columns"> 
            <div className="innercol" width="150" height="150">
                <p className="name">Labour Certifications</p><br/>
                <button>View Response</button>
            </div>   
           </div> 
          <div className="columns">
            <div className="innercol" width="150" height="150">
                <p className="name">Consular Processing Issues </p><br/>
                <button>View Response</button>
            </div>            
          </div> 
          <div className="columns"> 
            <div className="innercol" width="150" height="150">
                <p className="name">I-140 Issues</p><br/>
                <button>View Response</button>
            </div>              
          </div> 
          <div className="columns">  
            <div className="innercol" width="150" height="150">
                <p className="name">Lotery Visas-DV</p><br/>
                <button>View Response</button>
            </div>          
            
          </div> 
          <div className="columns">  
            <div className="innercol" width="150" height="150">
                <p className="name">Family Based Green Card</p><br/>
                <button>View Response</button> 
            </div>          
            
          </div>           
          </Slider>
        </div>
  
    </div>
       
      );
    }
  }