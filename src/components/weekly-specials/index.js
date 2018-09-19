import React, { Component } from 'react';
import Slider from 'react-slick';

import ImageArticle from '../image-article';
import SlickArrow from '../slick-arrow';

class WeeklySpecials extends Component {
  render() {
    const settings = {
      dots: true,
      useCSS: false,
      useTransform: false,
      nextArrow: <SlickArrow type="next" />,
      prevArrow: <SlickArrow type="prev" />,
      swipe: false,
    };

    return (
      <Slider {...settings}>
        <div>
          <ImageArticle
            image="https://via.placeholder.com/640x440/584c49"
            heading="About the Candyshop 1"
            copy="<p>Tristique dictum numquam doloribus proin tellus commodo, nullam elit illum architecto lobortis risus neque ipsam commodo cras class deleniti quis eligendi, fugit proin laboris iaculis mollitia! Risus? Provident doloremque nibh, dignissim perferendis.</p><p>Aliquip, convallis faucibus facilisi, occaecati irure laborum bibendum mollis ullamco sollicitudin sed sociosqu.</p>"
            date={{ day: 'Wed', occurance: 'Everyweek', time: '5-9pm' }}
            inverse
            sharing
          />
        </div>
        <div>
          <ImageArticle
            image="https://via.placeholder.com/640x440/484c49"
            heading="About the Candyshop 2"
            copy="<p>Tristique dictum numquam doloribus proin tellus commodo, nullam elit illum architecto lobortis risus neque ipsam commodo cras class deleniti quis eligendi, fugit proin laboris iaculis mollitia! Risus? Provident doloremque nibh, dignissim perferendis.</p>"
            date={{ day: 'Wed', occurance: 'Everyweek', time: '5-9pm' }}
            inverse
            sharing
          />
        </div>
        <div>
          <ImageArticle
            image="https://via.placeholder.com/640x440/384c49"
            heading="About the Candyshop 3"
            copy="<p>Tristique dictum numquam doloribus proin tellus commodo, nullam elit illum architecto lobortis risus neque ipsam commodo cras class deleniti quis eligendi, fugit proin laboris iaculis mollitia! Risus? Provident doloremque nibh, dignissim perferendis.</p><p>Aliquip, convallis faucibus facilisi, occaecati irure laborum bibendum mollis ullamco sollicitudin sed sociosqu.</p>"
            date={{ day: 'Wed', occurance: 'Everyweek', time: '5-9pm' }}
            inverse
            sharing
          />
        </div>
        <div>
          <ImageArticle
            image="https://via.placeholder.com/640x440/284c49"
            heading="About the Candyshop 4"
            copy="<p>Tristique dictum numquam doloribus proin tellus commodo, nullam elit illum architecto lobortis risus neque ipsam commodo cras class deleniti quis eligendi, fugit proin laboris iaculis mollitia! Risus? Provident doloremque nibh, dignissim perferendis.</p><p>Aliquip, convallis faucibus facilisi, occaecati irure laborum bibendum mollis ullamco sollicitudin sed sociosqu.</p>"
            date={{ day: 'Wed', occurance: 'Everyweek', time: '5-9pm' }}
            inverse
            sharing
          />
        </div>
      </Slider>
    );
  }
}

export default WeeklySpecials;