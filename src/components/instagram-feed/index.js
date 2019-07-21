import React, { Component } from 'react';
import Slider from 'react-slick';
import Fade from 'react-reveal/Fade'

import slideImg1 from '../../images/mood-01.jpg';
import slideImg2 from '../../images/mood-02.jpg';
import slideImg3 from '../../images/mood-03.jpg';
import slideImg4 from '../../images/mood-04.jpg';
import slideImg5 from '../../images/mood-05.jpg';

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