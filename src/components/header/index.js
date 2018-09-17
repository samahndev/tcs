import React, { Component } from 'react';
import ScrollAnim from 'rc-scroll-anim';
import cx from 'classnames';

import logo from '../../images/thecandyshop-logo.svg';
import expandButton from '../../images/expand-button.svg';

const Link = ScrollAnim.Link;

class Header extends Component {
  state = {
    isBooking: false
  };

  menuClickHandler = e => {
    e.stopPropagation();
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
      <header className="header">
        <Link to="hero" className="header-link">
          <div className="header-logo">
            <img src={logo} alt="The Candyshop" />
          </div>
        </Link>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <button
                className="nav-list-highlight"
                onClick={this.openBookingForm}
              >
                Book a Table
              </button>
              <div className={cx({
                'nav-list-on-click': true,
                'active': this.state.isBooking
              })}>
                <h3 className="nav-list-on-click-title">We take reservations for 50% of our dining room</h3>
                <p>We welcome walk-ins anytime of the day and run a very efficient waitlist system.</p>
                <p>To book a table, please send us an email with information about the number of people, the required date and time.</p>
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
                <a>
                  <button>
                    Menu
                    <img className="header-link-icon" src={expandButton} alt="" />
                  </button>
                  <ul className="nav-list-on-hover">
                    <li><button onClick={this.menuClickHandler}>Breakfast</button></li>
                    <li><button onClick={this.menuClickHandler}>Lunch</button></li>
                    <li><button onClick={this.menuClickHandler}>Dinner</button></li>
                  </ul>
                </a>
              </Link>
            </li>
            <li>
              <Link to="weekly-specials" className="header-link">
                <button>Weekly Specials</button>
              </Link>
            </li>
            <li>
              <Link to="function" className="header-link">
                <button>Functions</button>
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
