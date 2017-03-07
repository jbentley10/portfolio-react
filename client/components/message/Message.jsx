import React, { Component } from 'react';

export default class Message extends Component {
  render() {
    return (
      <div>
        {/* Blank Space */}
        <div className="blank-space"></div>

        {/* Message to the viewer */}
        <section id="message">
            <p><span>
              If you would like to take your project to the next level, I would love to hear from you!
            </span></p>
            <p><span>
              Drop me a line at <strong><a href="mailto:jwbentle@gmail.com">jwbentle@gmail.com</a></strong>
            </span></p>
            <div className="container">
                <div className="row">
                    <i className="fa fa-github" aria-hidden="true" />
                    <i className="fa fa-linkedin" aria-hidden="true" />
                    <i className="fa fa-file-text" aria-hidden="true" />
                </div>
            </div>
        </section>
      </div>
    )
  }
}
