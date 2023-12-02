import React, { Component } from "react";
import Slider from "react-slick";

export default class Slick extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        
        <Slider {...settings}>
          <div>
            <img src="https://picsum.photos/id/299/1600/600" alt=""/>
          </div>
          <div>
          <img src="https://picsum.photos/id/9/1600/600" alt="" srcset="" />
          </div>
          <div>
          <img src="https://picsum.photos/id/19/1600/600" alt="" srcset="" />

          </div>
          <div>
          <img src="https://picsum.photos/id/29/1600/600" alt="" srcset="" />

          </div>
          <div>
          <img src="https://picsum.photos/id/39/1600/600" alt="" srcset="" />

          </div>
          <div>
          <img src="https://picsum.photos/id/89/1600/600" alt="" srcset="" />
          </div>
        </Slider>
      </div>
    );
  }
}

