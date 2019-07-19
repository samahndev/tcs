import React from 'react';
import Fade from 'react-reveal/Fade'

import Header from '../components/header';
import Footer from '../components/footer';

import '../styles/main.scss';

const Layout = ({ children }) => (
  <div>
    <Header />
    <main>
      {children()}
    </main>
    <Fade>
      <Footer />
    </Fade>
  </div>
);

export default Layout;