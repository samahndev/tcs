import React from 'react';
import cx from 'classnames';

import arrow from '../../images/button-right.svg';

export default props => (
  <button
    className={cx({
      'slick-arrow': true,
      'slick-prev': props.type === 'prev',
      'slick-next': props.type === 'next',
      [`${props.classes}`]: props.classes
    })}
    onClick={props.onClick}
  >
    <img src={arrow} alt="" />
  </button>
);