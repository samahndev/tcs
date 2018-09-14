import React, { Component } from 'react';
import Slider from 'react-slick';

import Section from '../components/section';
import Hero from '../components/hero';

class IndexPage extends Component {
  render() {
    const settings = {
      fade: true
    };

    const instaSettings = {
      dots: true,
      slidesToShow: 4,
      slidesToSlide: 1
    }

    return (
      <div>
        {/* Hero */}
        <Section title="hero">
          <Hero />
        </Section>
        {/* Image Article */}
        <Section title="about">
          <div>
            <img src="https://picsum.photos/650/500/?image=900" alt="" />
          </div>
          <div>
            <div>
              <h2>About the Candyshop</h2>
              <p>
              Tristique dictum numquam doloribus proin tellus commodo, nullam elit illum architecto lobortis risus neque ipsam commodo cras class deleniti quis eligendi, fugit proin laboris iaculis mollitia! Risus? Provident doloremque nibh, dignissim perferendis.
              </p>
              <p>
              Aliquip, convallis faucibus facilisi, occaecati irure laborum bibendum mollis ullamco sollicitudin sed sociosqu.
              </p>
            </div>
          </div>
        </Section>
        {/* Menus */}
        <Section title="menu">
          <div>
            <img src="https://picsum.photos/360/240/?image=901" alt="" />
            <h3>Breakfast</h3>
            <small>Until 3pm</small>
            <p>
              Quo scelerisque diamlorem nibh hac doloremque ullam hac facere voluptatum eos aenean facilisis.
            </p>
            <a href="#">Download</a>
          </div>
          <div>
            <img src="https://picsum.photos/360/240/?image=902" alt="" />
            <h3>Breakfast</h3>
            <small>Until 3pm</small>
            <p>
              Quo scelerisque diamlorem nibh hac doloremque ullam hac facere voluptatum eos aenean facilisis.
            </p>
            <a href="#">Download</a>
          </div>
          <div>
            <img src="https://picsum.photos/360/240/?image=903" alt="" />
            <h3>Breakfast</h3>
            <small>Until 3pm</small>
            <p>
              Quo scelerisque diamlorem nibh hac doloremque ullam hac facere voluptatum eos aenean facilisis.
            </p>
            <a href="#">Download</a>
          </div>
          <div>
            <img src="https://picsum.photos/360/240/?image=904" alt="" />
          </div>
        </Section>
        {/* Weekly promo */}
        <Section title="weekly-specials">
          <Slider {...settings}>
            <div>
              <div>
                <div>
                  <h2>About the Candyshop</h2>
                  <p>
                  Tristique dictum numquam doloribus proin tellus commodo, nullam elit illum architecto lobortis risus neque ipsam commodo cras class deleniti quis eligendi, fugit proin laboris iaculis mollitia! Risus? Provident doloremque nibh, dignissim perferendis.
                  </p>
                  <p>
                  Aliquip, convallis faucibus facilisi, occaecati irure laborum bibendum mollis ullamco sollicitudin sed sociosqu.
                  </p>
                </div>
              </div>
              <div>
                <img src="https://picsum.photos/650/500/?image=900" alt="" />
              </div>
            </div>
            <div>
              <div>
                <div>
                  <h2>About the Candyshop</h2>
                  <p>
                  Tristique dictum numquam doloribus proin tellus commodo, nullam elit illum architecto lobortis risus neque ipsam commodo cras class deleniti quis eligendi, fugit proin laboris iaculis mollitia! Risus? Provident doloremque nibh, dignissim perferendis.
                  </p>
                  <p>
                  Aliquip, convallis faucibus facilisi, occaecati irure laborum bibendum mollis ullamco sollicitudin sed sociosqu.
                  </p>
                </div>
              </div>
              <div>
                <img src="https://picsum.photos/650/500/?image=900" alt="" />
              </div>
            </div>
            <div>
              <div>
                <div>
                  <h2>About the Candyshop</h2>
                  <p>
                  Tristique dictum numquam doloribus proin tellus commodo, nullam elit illum architecto lobortis risus neque ipsam commodo cras class deleniti quis eligendi, fugit proin laboris iaculis mollitia! Risus? Provident doloremque nibh, dignissim perferendis.
                  </p>
                  <p>
                  Aliquip, convallis faucibus facilisi, occaecati irure laborum bibendum mollis ullamco sollicitudin sed sociosqu.
                  </p>
                </div>
              </div>
              <div>
                <img src="https://picsum.photos/650/500/?image=900" alt="" />
              </div>
            </div>
          </Slider>
        </Section>
        {/* Image Article */}
        <Section title="function">
          <div>
            <img src="https://picsum.photos/650/750/?image=900" alt="" />
          </div>
          <div>
            <div>
              <h2>About the Candyshop</h2>
              <p>
              Tristique dictum numquam doloribus proin tellus commodo, nullam elit illum architecto lobortis risus neque ipsam commodo cras class deleniti quis eligendi, fugit proin laboris iaculis mollitia! Risus? Provident doloremque nibh, dignissim perferendis.
              </p>
              <p>
              Aliquip, convallis faucibus facilisi, occaecati irure laborum bibendum mollis ullamco sollicitudin sed sociosqu.
              </p>
            </div>
          </div>
        </Section>
        {/* Contact Us */}
        <Section title="contact-us">
          <div>
            <div>
              <h4>Don't miss any updates</h4>
              <p>
                Nam urna condimentum aliqua, perferendis turpis sapiente blandit, doloribus minus ullam taciti eleifend.
              </p>
              <form>
                <input type="text" placeholder="Email address" />
                <button>Subscribe</button>
              </form>
            </div>
            <div>
              <img src="https://picsum.photos/650/470/?image=900" alt="" />
            </div>
            <div>
              <img src="https://picsum.photos/360/240/?image=902" alt="" />
              <a>Address</a>
              <a>Phone</a>
              <a>Email</a>
            </div>
          </div>
        </Section>
        {/* Philosophy */}
        <Section>
          <div>
            <h1>A place to come and treat yourself</h1>
            <p>
              Tortor tenetur viverra nonummy irure. Excepturi arcu inventore quibusdam magnis quo soluta fugit.
            </p>
          </div>
        </Section>
        {/* Instagram */}
        <Section>
          <Slider {...instaSettings}>
            <img src="https://picsum.photos/360/360/?image=900" alt="" />
            <img src="https://picsum.photos/360/360/?image=900" alt="" />
            <img src="https://picsum.photos/360/360/?image=900" alt="" />
            <img src="https://picsum.photos/360/360/?image=900" alt="" />
            <img src="https://picsum.photos/360/360/?image=900" alt="" />
            <img src="https://picsum.photos/360/360/?image=900" alt="" />
            <img src="https://picsum.photos/360/360/?image=900" alt="" />
            <img src="https://picsum.photos/360/360/?image=900" alt="" />
          </Slider>
        </Section>
      </div>
    );
  }
}

export default IndexPage
