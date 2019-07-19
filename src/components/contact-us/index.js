import React, { Component } from 'react';
import cx from 'classnames';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import Fade from 'react-reveal/Fade'

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
    formResolvedMessage: ''
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
        formResolvedMessage: result.msg
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
            {!this.state.formResolved ?
              <form className="contact-us-newsletter-form">
                <input
                  className={cx({
                    'form-input': true,
                    'form-input-error': !this.hasError(this.state.formErrors.email)
                  })}
                  type="email"
                  name="email"
                  placeholder="Email address"
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
                  Subscribe
                </button>
              </form>
              :
              <p
                className="contact-us-newsletter-message"
                dangerouslySetInnerHTML={{ __html: this.state.formResolvedMessage }}
              />
            }
          </div>
          <div className="contact-us-image">
            <div
              className="contact-us-image-item"
              style={{
                backgroundImage: 'url(https://via.placeholder.com/640x500/6b6d65)'
              }}
            />
          </div>
          <div className="contact-us-map">
            <div
              className="contact-us-map-image"
              style={{
                backgroundImage: 'url(https://via.placeholder.com/430x250/ede5d9)'
              }}
            />
            <div className="contact-us-map-content">
              <a href="#">
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