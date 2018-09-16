import React, { Component } from 'react';
import ScrollAnim from 'rc-scroll-anim';

const Link = ScrollAnim.Link;

class Header extends Component {
  menuClickHandler = e => {
    e.stopPropagation();
  }

  render() {
    return (
      <header className="header">
        <div>
          <Link to="hero" className="header-link">
            <button>Logo</button>
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <button>Book a table</button>
              <div className="nav-list-on-click">
                <h3>We take reservations for 50% of our dining room</h3>
                <p>We welcome walk-ins anytime of the day and run a very efficient waitlist system.</p>
                <p>Please send us an email to book a table.</p>
                <a href="mailto:hello@thecandyshop.co.nz">Check availability</a>
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
                  <button>Menu</button>
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
