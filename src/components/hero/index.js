import React from 'react';
import Fade from 'react-reveal/Fade'
import * as SVGLoaders from 'svg-loaders-react';

import PreloadImage from '../preload-image'
import heroImage from '../../images/petr-sevcovic-594807-unsplash.jpg';

export default class Hero extends React.Component {
  state = { heroLoaded: false }
  render() {
    return (
      <div className="hero">
        <PreloadImage
          className="heroImage"
          src={heroImage}
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
                  <span>Kiwi food with a twist</span>
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
                    Saturday <span>/</span> 8am <span>-</span> 9pm<span>, </span>Sunday <span>/</span> 8am <span>-</span> 4pm
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