import React, { Component } from 'react';
import cx from 'classnames';

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

    // Mock behaviour
    setTimeout(() => {
      this.setState(
        {
          formSending: false,
          formResolved: true,
          formResolvedMessage: `Successfully subscribed!`
        },
        () => {
          setTimeout(() => {
            this.setState({ formResolved: false }, () => { this.resetForm() });
          }, 3000)
        }
      );
    }, 1500);
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
      <div className="contact-us">
        <div className="contact-us-newsletter">
          <div className="contact-us-newsletter-content">
            <h3>Don't miss any updates</h3>
            <p>
              Nam urna condimentum aliqua, perferendis turpis sapiente blandit, doloribus minus ullam taciti eleifend.
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
              <input
                className={cx({
                  'btn': true,
                  'btn-disabled': !this.state.formValid,
                  'btn-sending': this.state.formSending
                })}
                type="button"
                onClick={this.handleFormSubmit}
                value="Subscribe"
                disabled={!this.state.formValid || this.state.formSending}
              />
            </form>
            :
            <p className="contact-us-newsletter-message">
              {this.state.formResolvedMessage}
            </p>
          }
        </div>
        <div className="contact-us-image">
          <div
            className="contact-us-image-item"
            style={{
              backgroundImage: 'url(https://picsum.photos/650/470/?image=900)'
            }}
          />
        </div>
        <div className="contact-us-map">
          <div
            className="contact-us-map-image"
            style={{
              backgroundImage: 'url(https://picsum.photos/360/240/?image=903)'
            }}
          />
          <div className="contact-us-map-content">
            <a href="#">
              2-8 Osbourne Street,
              <br />
              Newmarket, Auckland
            </a>
            <br />
            <a href="#">021 259 7838</a>
            <br />
            <a href="#">hello@thecandyshopnz.com</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;