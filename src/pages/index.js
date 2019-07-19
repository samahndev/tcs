import React, { Component } from 'react';

import Section from '../components/section';
import Hero from '../components/hero';
import ImageArticle from '../components/image-article';
import Menus from '../components/menus';
import ContactUs from '../components/contact-us';
import Philosophy from '../components/philosophy';
import InstagramFeed from '../components/instagram-feed';
import aboutImage from '../images/41274643_307549579828965_5350101481835028502_n.jpg'
import promoImage from '../images/39390469_1893213357650353_8309209022323475479_n.jpg'
import functionImage from '../images/39607209_282537882573239_968077752777011638_n.jpg'

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
            image={aboutImage}
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
          image={promoImage}
          heading="Coffee by Camper"
          copy="<p>With two-time New Zealand AeroPress Champion and owner of Camper Coffee, Woo Hyung Lee, onboard as head barista and roaster you can trust in your cup.</p><p>Embodying our belief that every element matters, we also roast our own seasonal single origin.</p>"
          inverse
        />
        </Section>

        {/* Functions */}
        <Section title="table-team">
          <ImageArticle
            image={functionImage}
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
