import React, { Component } from 'react';
import Slider from 'react-slick';

import ImageArticle from '../image-article';

class WeeklySpecials extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true
    };

    return (
      <Slider {...settings}>
        <div>
          <ImageArticle inverse />
        </div>
        <div>
          <ImageArticle inverse />
        </div>
        <div>
          <ImageArticle inverse />
        </div>
        <div>
          <ImageArticle inverse />
        </div>
      </Slider>
    );
  }
}

export default WeeklySpecials;