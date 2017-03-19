import React, { Component } from 'react';

// Load images
const HeaderBackground = require('../../assets/images/welcome/me-looking-2.jpg');

// Load styles (mainly for background image to work)
const headerBackgroundStyle = {
  backgroundImage: 'url(' + HeaderBackground + ')',
  backgroundSize: 'cover',
  backgroundPosition: '50%',
  height: '100vh',
};

export default class Header extends Component {
  render() {
    return (
      // Slide menu inspiration from
      // Starter Page
      <div id="o-wrapper" className="o-wrapper">
          <div id="welcome" style={headerBackgroundStyle}>
              <div className="welcome-text">
                  <h1 className="type-1-animation">
                    The Work of John W. Bentley
                    <span className="blinking-cursor">|</span>
                  </h1>
              </div>
          </div>
      </div>
    )
  }
}
