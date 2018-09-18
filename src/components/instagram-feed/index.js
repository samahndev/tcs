import React, { Component } from 'react';
import Slider from 'react-slick';

class InstagramFeed extends Component {
  render() {
    const instaSettings = {
      arrows: false,
      dots: true,
      slidesToShow: 4,
      slidesToSlide: 1
    };

    return (
      <div className="instagram-feed">
        <Slider {...instaSettings}>
          <div className="instagram-feed-item">
            <img src="https://picsum.photos/360/360/?image=900" alt="" />
          </div>
          <div className="instagram-feed-item">
            <img src="https://picsum.photos/360/360/?image=900" alt="" />
          </div>
          <div className="instagram-feed-item">
            <img src="https://picsum.photos/360/360/?image=900" alt="" />
          </div>
          <div className="instagram-feed-item">
            <img src="https://picsum.photos/360/360/?image=900" alt="" />
          </div>
          <div className="instagram-feed-item">
            <img src="https://picsum.photos/360/360/?image=900" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default InstagramFeed;