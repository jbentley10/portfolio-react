import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      // Slide menu inspiration from
      // Starter Page
      <div id="o-wrapper" className="o-wrapper">
          <div id="welcome">
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
