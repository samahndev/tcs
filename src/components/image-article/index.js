import React, { Component } from 'react';
import cx from 'classnames';
import Fade from 'react-reveal/Fade'

import PreloadImage from '../preload-image'
import { facebookShare, twitterShare, pinterestShare } from './share';

import facebook from '../../images/facebook-icon.svg';
import twitter from '../../images/twitter-logo.svg';
import pinterest from '../../images/pinterest-logo.svg';

class ImageArticle extends Component {
  state = { imageLoaded: false }
  render() {
    const {
      copy,
      cta,
      date,
      heading,
      image,
      inverse,
      sharing,
    } = this.props;
    
    return (
      <article className={cx({
        'image-article': true,
        'image-article-inverse': inverse,
      })}>
        <div className="image-article-wrapper">
          <div className="image-article-image">
            {date &&
              <div className="image-article-date">
                <div className="image-article-day">
                  <span className="image-article-day-week">
                    {date.day }
                  </span>
                  <span className="image-article-day-occurance">
                    {date.occurance}
                  </span>
                </div>
                <div className="image-article-time">
                  {date.time}
                </div>
              </div>
            }
            <PreloadImage
              className="image-article-image-item"
              src={image}
              lazy
            />
          </div>
          <div className="image-article-content">
            <Fade bottom cascade>
              <div className="image-article-content-wrapper">
                <h2
                  className="image-article-content-title"
                  dangerouslySetInnerHTML={{ __html: heading }}
                />
                <div
                  className="image-article-content-copy"
                  dangerouslySetInnerHTML={{ __html: copy }}
                />
                {sharing &&
                  <div className="image-article-content-share">
                    Share
                    <img
                      src={facebook}
                      onClick={() => facebookShare()}
                      alt=""
                    />
                    <img
                      src={twitter}
                      onClick={() => twitterShare()}
                      alt=""
                    />
                    <img
                      src={pinterest}
                      onClick={() => pinterestShare()}
                      alt=""
                    />
                  </div>
                }
                {cta &&
                  <a className="btn btn-green" href={cta.link}>{cta.text}</a>
                }
              </div>
            </Fade>
          </div>
        </div>
      </article>
    );
  }
}

export default ImageArticle;