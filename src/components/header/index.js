import React, { Component } from 'react';
import ScrollAnim from 'rc-scroll-anim';
import cx from 'classnames';

import logo from '../../images/thecandyshop-logo.svg';
import expandButton from '../../images/expand-button.svg';

const Link = ScrollAnim.Link;

class Header extends Component {
  state = {
    isBooking: false,
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
    isBelowTheFold: false
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, false)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false)
  }

  handleScroll = () => {
    let scrollTop = window.pageYOffset
    if (( scrollTop > ( this.state.windowHeight / 2 ) ) && ( this.state.windowWidth >= 1024 )) {
      if (!this.state.isBelowTheFold) {
        this.setState({ isBelowTheFold: true })
      }
    }
    else {
      if (this.state.isBelowTheFold) {
        this.setState({ isBelowTheFold: false })
      }
    }
  }

  menuClickHandler = e => {
    e.stopPropagation();

    window.open('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf');
  }

  openBookingForm = () => {
    this.setState({
      isBooking: this.state.isBooking ? false : true
    });
  }

  closeBookingForm =() => {
    this.setState({
      isBooking: false
    });
  }

  render() {
    return (
      <header className={cx({
        'header': true,
        'header-compact': this.state.isBelowTheFold
      })}>
        <Link to="hero" className="header-link">
          <div className="header-logo">
            <img src={logo} alt="The Candyshop" />
          </div>
        </Link>
        <input id="nav-toggle" className="header-toggle-checkbox" type="checkbox" />
        <label htmlFor="nav-toggle" className="header-toggle">
          <span /><span />
        </label>
        <nav className="nav">
          <ul className="nav-list">
            <li className={cx({
              'nav-list-highlight': true,
              'active': this.state.isBooking
            })}>
              <button onClick={this.openBookingForm}>
                Book a Table
              </button>
              <div className={cx({
                'nav-list-on-click': true,
                'active': this.state.isBooking
              })}>
                <h3 className="nav-list-on-click-title">We don’t want anyone to miss out.</h3>
                <p>If you would like to bring the whole team in, or have us cater to you, we can accomodate.</p>
                <p>Just send us an email and lets get chatting!</p>
                <a
                  className="btn"
                  href="mailto:hello@thecandyshop.co.nz"
                  onClick={this.closeBookingForm}
                >
                  Send an email
                </a>
                <span
                  className="nav-list-on-click-close-button"
                  onClick={this.closeBookingForm}
                >
                  X
                </span>
              </div>
            </li>
            <li>
              <Link to="about" className="header-link">
                <button>The Candyshop</button>
              </Link>
            </li>
            <li>
              <Link to="menu" className="header-link">
                <a className="header-link-item">
                  <button>
                    Menu
                    {/* <div className="header-link-icon">
                      <img src={expandButton} alt="" />
                    </div> */}
                  </button>
                  {/* <ul className="nav-list-on-hover">
                  <li><button onClick={this.menuClickHandler}>Breakfast</button></li>
                    <li><button onClick={this.menuClickHandler}>Lunch</button></li>
                    <li><button onClick={this.menuClickHandler}>Dinner</button></li>
                  </ul> */}
                </a>
              </Link>
            </li>
            <li>
              <Link to="coffee-by-camper" className="header-link">
                <button>Coffee by Camper</button>
              </Link>
            </li>
            <li>
              <Link to="table-team" className="header-link">
                <button>Table Team</button>
              </Link>
            </li>
            <li>
              <Link to="contact-us" className="header-link">
                <button>Contact Us</button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
