import React, { Component } from 'react'

// import favicon from './favicon.png'

let inlineStyles = ''

if (process.env.NODE_ENV === 'production') {
  try {
    inlineStyles = require('!raw-loader!../public/styles.css')
  } catch(e) {
    console.log(e)
  }
}

export default class HTML extends Component {
  render() {
    let css = null

    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id="gatsby-inline-css"
          dangerouslySetInnerHTML={{ __html: inlineStyles }}
        />
      )
    }
    console.log('???', this.props)
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          {/* <link rel="shortcut icon" href={favicon} /> */}
          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}