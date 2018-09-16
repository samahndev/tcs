import React, { Component } from 'react';

class ContactUs extends Component {
  render() {
    return (
      <div className="contact-us">
        <div className="contact-us-newsletter">
          <h4>Don't miss any updates</h4>
          <p>
            Nam urna condimentum aliqua, perferendis turpis sapiente blandit, doloribus minus ullam taciti eleifend.
          </p>
          <form>
            <input type="text" placeholder="Email address" />
            <button>Subscribe</button>
          </form>
        </div>
        <div className="contact-us-image">
          <img src="https://picsum.photos/650/470/?image=900" alt="" />
        </div>
        <div className="contact-us-map">
          <img src="https://picsum.photos/360/240/?image=902" alt="" />
          <a>Address</a>
          <a>Phone</a>
          <a>Email</a>
        </div>
      </div>
    );
  }
}

export default ContactUs;