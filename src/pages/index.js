import React, { Component } from 'react';

import Section from '../components/section';
import Hero from '../components/hero';
import ImageArticle from '../components/image-article';
import Menus from '../components/menus';
import WeeklySpecials from '../components/weekly-specials';
import ContactUs from '../components/contact-us';
import Philosophy from '../components/philosophy';
import InstagramFeed from '../components/instagram-feed';

class IndexPage extends Component {
  render() {
    return (
      <div>

        {/* Hero */}
        <Section title="hero">
          <Hero />
        </Section>

        {/* About */}
        <Section title="about">
          <ImageArticle />
        </Section>

        {/* Menus */}
        <Section title="menu">
          <Menus />
        </Section>

        {/* Weekly promo */}
        <Section title="weekly-specials">
          <WeeklySpecials />
        </Section>

        {/* Functions */}
        <Section title="function">
          <ImageArticle />
        </Section>

        {/* Contact Us */}
        <Section title="contact-us">
          <ContactUs />
        </Section>

        {/* Philosophy */}
        <Section>
          <Philosophy />
        </Section>

        {/* Instagram Feed */}
        <Section>
          <InstagramFeed />          
        </Section>
      </div>
    );
  }
}

export default IndexPage
