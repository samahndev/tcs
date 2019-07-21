import React from 'react';
import Fade from 'react-reveal/Fade'
import * as SVGLoaders from 'svg-loaders-react';

import PreloadImage from '../preload-image'
import heroImage from '../../images/thecandyshop-store.jpg';
import heroImageMobile from '../../images/thecandyshop-store-mobile.jpg';

export default class Hero extends React.Component {
  state = { heroLoaded: false, isMobile: null }
  componentDidMount() {
    if (window.innerWidth <= 768) {
      this.setState({ isMobile: true })
    } else {
      this.setState({ isMobile: false })
    }
  }
  render() {
    return (
      <div className="hero">
        <PreloadImage
          className="heroImage"
          src={this.state.isMobile ? heroImageMobile : heroImage}
          loadSuccess={() => {
            setTimeout(() => {
              this.setState({ heroLoaded: true })
            }, 1000)
          }}
        />
        <div className="hero-content">
          {this.state.heroLoaded ?
            <div>
              <h1 className="hero-content-title">
                <Fade bottom cascade>
                  <span>All day eatery,</span>
                </Fade>
                <br />
                <Fade bottom cascade>
                  <span className="hero-content-subtitle">Kiwi food with a twist</span>
                </Fade>
              </h1>
              <Fade bottom>
                <div>
                  <p className="hero-content-address">
                    2-8 Osbourne Street,
                    <br />
                    Newmarket, Auckland
                  </p>
                  <p className="hero-content-opening-hours">
                    Monday <span>/</span> 7am <span>-</span> 4am<br />
                    Tuesday <span>-</span> Friday <span>/</span> 7am <span>-</span> 9pm<br />
                    Saturday <span>/</span> 8am <span>-</span> 9pm<span>, <br className="hide-desktop" /></span>Sunday <span>/</span> 8am <span>-</span> 4pm
                  </p>
                </div>
              </Fade>
            </div>
            :
            <div className="hero-loader">
              <SVGLoaders.TailSpin />
            </div>
          }
        </div>
      </div>
    )
  }
}