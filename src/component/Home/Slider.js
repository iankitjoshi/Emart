import React, { Component } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../../CSS/Emart.css'

const img1 = require('../../IMG/shoes.png')
const img2 = require('../../IMG/shoes11.jpg')

function SampleNextArrow(props){
    const {className , style, onClick} = props
    return(
        <div
        className={className}
        style={{ ...style, display: "block",marginRight:"25px"}}
        onClick={onClick}
      />
    )
}

class Sliders extends Component{
    render(){
      const setting = {
          dots : false,
          infinite : true,
          speed : 5000,
          slidesToShow : 1,
          slidesToScroll : 1,
          nextArrow: <SampleNextArrow />
      } 
    
    return(
        <div className="slide-div">

        <Slider {...setting}>
            <div>
                <img className="image-slide" src={img2} />
            </div>
            <div>
                <img className="image-slide" src={img1} />
            </div>
        </Slider>
        <br /><br />
        </div>
    )
}
}
export default Sliders