import React from 'react';
import cx from 'classnames';

export default props => (
  <article className={cx({
    'image-article': true,
    'image-article-inverse': props.inverse,
  })}>
    <div className="image-article-wrapper">
      <div className="image-article-image">
        {props.date &&
          <div className="image-article-date">
            <div className="image-article-day">
              <span className="image-article-day-week">
                {props.date.day }
              </span>
              <br />
              <span className="image-article-day-occurance">
                {props.date.occurance}
              </span>
            </div>
            <div className="image-article-time">
              {props.date.time}
            </div>
          </div>
        }
        <div
          className="image-article-image-item"
          style={{
            backgroundImage: `url(${props.image})`
          }}
        />
      </div>
      <div className="image-article-content">
        <div className="image-article-content-wrapper">
          <h2 className="image-article-content-title">{props.heading}</h2>
          <div dangerouslySetInnerHTML={{ __html: props.copy }} />
          {props.sharing &&
            <h4>Sharing</h4>
          }
        </div>
      </div>
    </div>
  </article>
);