import React, { Component } from 'react';

class Section extends Component {
  render() {
    const { children, title } = this.props;

    return (
      <section id={title}>
        {children}
      </section>
    );
  }
}

export default Section;