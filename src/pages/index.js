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
          <ImageArticle
            image="https://picsum.photos/650/500/?image=900"
            heading="About the Candyshop"
            copy="<p>Tristique dictum numquam doloribus proin tellus commodo, nullam elit illum architecto lobortis risus neque ipsam commodo cras class deleniti quis eligendi, fugit proin laboris iaculis mollitia! Risus? Provident doloremque nibh, dignissim perferendis.</p><p>Aliquip, convallis faucibus facilisi, occaecati irure laborum bibendum mollis ullamco sollicitudin sed sociosqu.</p>"
          />
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
          <ImageArticle
            image="https://picsum.photos/650/500/?image=900"
            heading="About the Candyshop"
            copy="<p>Tristique dictum numquam doloribus proin tellus commodo, nullam elit illum architecto lobortis risus neque ipsam commodo cras class deleniti quis eligendi, fugit proin laboris iaculis mollitia! Risus? Provident doloremque nibh, dignissim perferendis.</p><p>Aliquip, convallis faucibus facilisi, occaecati irure laborum bibendum mollis ullamco sollicitudin sed sociosqu.</p><p>Tristique dictum numquam doloribus proin tellus commodo, nullam elit illum architecto lobortis risus neque ipsam commodo cras class deleniti quis eligendi, fugit proin laboris iaculis mollitia! Risus? Provident doloremque nibh, dignissim perferendis.</p><p>Aliquip, convallis faucibus facilisi, occaecati irure laborum bibendum mollis ullamco sollicitudin sed sociosqu. Aliquip, convallis faucibus facilisi, occaecati irure laborum bibendum mollis ullamco sollicitudin sed sociosqu.</p><p>Aliquip, convallis faucibus facilisi.</p>"
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

export default IndexPage
