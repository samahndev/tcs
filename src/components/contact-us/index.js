import React, { Component } from 'react';
import cx from 'classnames';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import Fade from 'react-reveal/Fade'
import * as SVGLoaders from 'svg-loaders-react';

import PreloadImage from '../preload-image'
import contactImage from '../../images/41274643_307549579828965_5350101481835028502_n.jpg'

class ContactUs extends Component {
  state = {
    newUser: {
      email: '',
    },

    formErrors: {
      email: '',
    },

    emailValid: false,

    formValid: false,
    formSending: false,
    formResolved: false,
    formResolvedMessage: '',
    formResult: null
  };

  resetForm() {
    this.setState({
      newUser: {
        email: '',
      },
  
      formErrors: {
        email: '',
      },
  
      emailValid: false,
  
      formValid: false,
      formSending: false,
      formResolved: false,
      formResolvedMessage: ''
    });
  }

  handleFormSubmit = e => {
    e.preventDefault();

    this.setState({
      formSending: true
    });

    addToMailchimp(this.state.newUser.email)
    .then(result => {
      this.setState({
        formSending: false,
        formResolved: true,
        formResolvedMessage: result.msg,
        formResult: result.result
      });
    })
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      default:
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      emailValid,
    }, this.validateForm);
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid
    });
  }

  handleInput = e => {
    let value = e.target.value;
    let name = e.target.name;
    
    this.setState(prevState => (
      { newUser: { ...prevState.newUser, [name]: value } }
    ), () => this.validateField(name, value));
  }

  hasError(error) {
    return error === '';
  }

  render() {
    return (
      <Fade up cascade>
        <div className="contact-us">
          <div className="contact-us-newsletter">
            <div className="contact-us-newsletter-content">
              <h3>Don't miss any updates</h3>
              <p>
                Want the latest news from The Candy Shop team?<br />Pop your email in here.
              </p>
            </div>
            {this.state.formResolved &&
              <Fade left>
                <span>
                  <small
                    className="contact-us-newsletter-message"
                    dangerouslySetInnerHTML={{ __html: this.state.formResolvedMessage }}
                  />
                  &nbsp;{this.state.formResult === 'success' ? <span>👍</span> : <span>🤔</span>}
                </span>
              </Fade>
            }
            {this.state.formResult !== 'success' &&
              <form className="contact-us-newsletter-form">
                <input
                  className={cx({
                    'form-input': true,
                    'form-input-error': !this.hasError(this.state.formErrors.email) || this.state.formResult === 'error'
                  })}
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={this.state.newUser.email}
                  onChange={this.handleInput}
                />
                <button
                  className={cx({
                    'btn': true,
                    'btn-disabled': !this.state.formValid,
                    'btn-sending': this.state.formSending
                  })}
                  onClick={this.handleFormSubmit}
                  disabled={!this.state.formValid || this.state.formSending}
                >
                  {this.state.formSending ? <SVGLoaders.TailSpin transform="scale(.5)" /> : 'Subscribe'}
                </button>
              </form>
            }
          </div>
          <div className="contact-us-image">
            <PreloadImage
              className="contact-us-image-item"
              src={contactImage}
              lazy
            />
          </div>
          <div className="contact-us-map">
            <div className="contact-us-map-image">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.938056354845!2d174.77496251493363!3d-36.867901488283266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4876eac1be55%3A0xb036d22a9e733814!2s2-8+Osborne+St%2C+Newmarket%2C+Auckland+1023!5e0!3m2!1sen!2snz!4v1563712045478!5m2!1sen!2snz" width="400" height="300" frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="contact-us-map-content">
              <a href="https://goo.gl/maps/pszT1c2WuyZS396A9" target="_blank">
                <span>2-8 Osbourne Street,</span>
                <br />
                <span>Newmarket, Auckland</span>
              </a>
              <br />
              <a href="#">021 259 7838</a>
              <br />
              <a href="#"><span>hello@thecandyshopnz.com</span></a>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default ContactUs;