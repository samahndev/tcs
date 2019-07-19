import React, { Component } from 'react';

import Section from '../components/section';
import Hero from '../components/hero';
import ImageArticle from '../components/image-article';
import Menus from '../components/menus';
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
          <ImageArticle
            image='https://via.placeholder.com/640x440/505a5e'
            heading="About the Candyshop"
            copy="<p>Deftly blending European and Korean cuisine, The Candyshop is an elegant all-day eatery within which to enjoy a unique take on Kiwi-food.</p>"
          />
        </Section>

        {/* Menus */}
        <Section title="menu">
          <Menus />
        </Section>

        {/* Weekly promo */}
        <Section title="coffee-by-camper">
        <ImageArticle
          image='https://via.placeholder.com/640x440/505a5e'
          heading="Coffee by Camper"
          copy="<p>With two-time New Zealand AeroPress Champion and owner of Camper Coffee, Woo Hyung Lee, onboard as head barista and roaster you can trust in your cup.</p><p>Embodying our belief that every element matters, we also roast our own seasonal single origin.</p>"
          inverse
        />
        </Section>

        {/* Functions */}
        <Section title="table-team">
          <ImageArticle
            image="https://via.placeholder.com/640x850/6b6967"
            heading="Table Team"
            copy="<p>Want to bring all your friends?<br />We can accomodate functions and bookings.</p>"
            cta={{ link: 'mailto:hello@thecandyshopnz.com', text: 'Just email us' }}
          />
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

export default IndexPage;
