import React from 'react';

import logo from '../../images/thecandyshop-logo.svg';

export default () => (
  <footer className="footer">
    <ul className="footer-list">
      <li><a href="https://www.facebook.com/pages/The-Candy-Shop/2001709126709249" target="_blank">Facebook</a></li>
      <li><a href="https://www.instagram.com/thecandyshopnz/" target="_blank">Instagram</a></li>
    </ul>
    <img src={logo} alt="" />
    <span>All rights reserved</span>
  </footer>
);