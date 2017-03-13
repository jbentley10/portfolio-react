import React, { Component } from 'react';

// Load images
const TTGameFlow = require('../../assets/images/explore/tractor-tipping/game-flow.png');
const KidTesting = require('../../assets/images/explore/tractor-tipping/kid-testing.png');
const TractorTipping5 = require('../../assets/images/explore/tractor-tipping/5.png');
const TractorTipping1 = require('../../assets/images/explore/tractor-tipping/1.png');

// Links
const TractorTippingLink = "https://leapfrog.com";

export default class LeapFrog extends Component {
  render() {
    return (
      // Slide menu inspiration from
      // Starter Page
      <div>
        {/* Blank Space */}
        <div className="blank-space">
          {/* <span className="year">2014</span> */}
        </div>

        {/* LeapFrog */}
        <section id="leapfrog">
            <div className="container">
                <div className="row">
                    <div className="col-xs-3">
                      <img src={TTGameFlow} />
                    </div>
                    <div className="col-xs-6 section-title">
                      <div>
                        <h3>At LeapFrog, I developed my passion for user testing and interaction design</h3>
                        <span>Game Design Intern  |  LeapFrog  |  2014</span>
                      </div>
                    </div>
                    <div className="col-xs-3">
                      <img src={KidTesting} />
                    </div>
                </div>
            </div>
            <div className="container">
              <div className="row">
                  <img src={TractorTipping5} />
              </div>
            </div>
            <div className="container">
              <div className="row">
                  <p>
                      While at LeapFrog, I worked in a team of 4 to develop a prototype math game for 4-7 year olds. I partictipated in daily stand ups, created a game design document, wireframed levels, and conducted user tests with kids.
                  </p>
              </div>
              <div className="row">
                <strong className="text-link">
                  <a href={TractorTippingLink}>
                    <span>Tractor Tipping</span>
                  </a>
                </strong>
                <br />
              </div>
            </div>
            <div className="container quote-container">
              <blockquote className="row leapfrog-quote">
                  <strong>
                      “I worked closely with John during his internship at Leapfrog. He quickly became a highly productive member of our design team, taking on the wide array of tasks we handed him on a daily basis with creativity and enthusiasm. His work was thorough, he took feedback well, and he was a pleasure to work with.”
                  </strong>
                  <br />
              </blockquote>
              <div className="row">
                  <span>- Sandy Spanger</span><span> Senior Game Designer at Anki, Inc. </span>
              </div>
            </div>
        </section>
      </div>
    )
  }
}
