import React from 'react';
import cx from 'classnames';

export default props => (
  <article className={cx({
    'image-article': true,
    'image-article-inverse': props.inverse,
  })}>
    <div className="image-article-wrapper">
      <div className="image-article-image">
        <img src="https://picsum.photos/650/500/?image=900" alt="" />
      </div>
      <div className="image-article-content">
        <div className="image-article-content-wrapper">
          <h2>About the Candyshop</h2>
          <p>
            Tristique dictum numquam doloribus proin tellus commodo, nullam elit illum architecto lobortis risus neque ipsam commodo cras class deleniti quis eligendi, fugit proin laboris iaculis mollitia! Risus? Provident doloremque nibh, dignissim perferendis.
          </p>
          <p>
            Aliquip, convallis faucibus facilisi, occaecati irure laborum bibendum mollis ullamco sollicitudin sed sociosqu.
          </p>
        </div>
      </div>
    </div>
  </article>
);