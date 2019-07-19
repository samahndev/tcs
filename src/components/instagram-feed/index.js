import React, { Component } from 'react';
import Slider from 'react-slick';
import Fade from 'react-reveal/Fade'

import slideImg1 from '../../images/41274643_307549579828965_5350101481835028502_n.jpg';
import slideImg2 from '../../images/40125578_172244597002749_2629430466091729665_n.jpg';
import slideImg3 from '../../images/39918942_695725207452701_7884063517403544028_n.jpg';
import slideImg4 from '../../images/39607209_282537882573239_968077752777011638_n.jpg';
import slideImg5 from '../../images/39390469_1893213357650353_8309209022323475479_n.jpg';

class InstagramFeed extends Component {
  render() {
    const instaSettings = {
      arrows: false,
      dots: true,
      slidesToShow: 4,
      slidesToSlide: 1,
      lazyLoad: 'ondemand',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    };

    return (
      <div className="instagram-feed">
        <Fade>
          <Slider {...instaSettings}>
            <div className="instagram-feed-item">
              <div className="instagram-feed-item-image" style={{ backgroundImage: `url(${slideImg1})`}} />
            </div>
            <div className="instagram-feed-item">
              <div className="instagram-feed-item-image" style={{ backgroundImage: `url(${slideImg2})`}} />
            </div>
            <div className="instagram-feed-item">
              <div className="instagram-feed-item-image" style={{ backgroundImage: `url(${slideImg3})`}} />
            </div>
            <div className="instagram-feed-item">
              <div className="instagram-feed-item-image" style={{ backgroundImage: `url(${slideImg4})`}} />
            </div>
            <div className="instagram-feed-item">
              <div className="instagram-feed-item-image" style={{ backgroundImage: `url(${slideImg5})`}} />
            </div>
          </Slider>
        </Fade>
      </div>
    );
  }
}

export default InstagramFeed;