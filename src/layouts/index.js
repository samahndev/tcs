import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

import '../styles/main.scss';

const Layout = ({ children }) => (
  <div>
    <Header />
    <main>
      {children()}
    </main>
    <Footer />
  </div>
);

export default Layout;