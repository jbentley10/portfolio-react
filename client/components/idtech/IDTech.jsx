import React, { Component } from 'react';

// Assets
const StyleGuide1 = require('../../assets/images/explore/id-tech/style-guide/1.png');
const StyleGuide2 = require('../../assets/images/explore/id-tech/style-guide/2.png');
const HallOfFame = require('../../assets/images/explore/id-tech/hall-of-fame.png');
const WelcomePacket = require('../../assets/images/explore/id-tech/welcome-packet/welcome-packet.png');
const Next = require('../../assets/images/explore/id-tech/next/1.png');

// Links
const StyleGuideLink = 'https://www.idtech.com/style-guide';
const NextLink = 'https://www.idtech.com/next';
const CareersLink = 'https://www.idtech.com/jobs/summer-jobs';

export default class IDTech extends Component {
  render() {
    return (
      // Slide menu inspiration from
      // Starter Page
      <div>
        {/* Blank Space */}
        <div className="blank-space"></div>

        {/* iD Tech */}
        <section id="idtech">
            <div className="container">
                <div className="row">
                    <div className="col-xs-3">
                      <a href={StyleGuideLink} target="blank">
                        <img src={StyleGuide1} />
                      </a>
                    </div>
                    <div className="col-xs-6 section-title">
                        <h3>
                            My first dive into professional web design
                            was at iD Tech
                        </h3>
                        <span>
                            Front End Developer   |   iD Tech   |   2014 - 2016
                        </span>
                    </div>
                    <div className="col-xs-3">
                      <a href={CareersLink} target="blank">
                        <img src={HallOfFame} />
                      </a>
                    </div>
                </div>
                <div className="row">
                  <a href={NextLink} target="blank">
                    <img src={Next} />
                  </a>
                </div>
              </div>
              <div className="container">
                  <div className="row">
                    <div className="col-xs-4 col-xs-offset-8">
                      <p>
                          In addition to converting designs into code, I worked closely with fellow designers to wireframe, user test, and implement new products.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <strong className="text-link">
                      <a href={NextLink} target="blank">
                        <span>/Next</span>
                      </a>
                    </strong>
                    <strong className="text-link">
                      <a href={StyleGuideLink} target="blank">
                        <span>Style Guide</span>
                      </a>
                    </strong>
                    <strong className="text-link">
                      <a href={CareersLink} target="blank">
                        <span>Careers Page</span>
                      </a>
                    </strong>
                  </div>
              </div>
              <div className="container quote-container">
                <blockquote className="row">
                    <strong>
                        “He is able to take ideas and merge them with solid web
                        designing skills to provide creative solutions to problems
                        we faced within the company.”
                    </strong>
                    <br />
                </blockquote>
                <div className="row">
                    <span>- Olga Kuczer</span><span> Senior Product UI / UX Designer, IBM </span>
                </div>
            </div>
        </section>
      </div>
    )
  }
}
