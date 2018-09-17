import React from 'react';

import logo from '../../images/thecandyshop-logo.svg';

export default () => (
  <footer className="footer">
    <ul>
      <li><a>Facebook</a></li>
      <li><a>Instagram</a></li>
    </ul>
    <img src={logo} alt="" />
    <span>All rights reserved</span>
  </footer>
);