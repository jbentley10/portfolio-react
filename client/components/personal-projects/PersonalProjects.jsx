import React, { Component } from 'react';

// Load images
const GroovesGrinds = require('../../assets/images/explore/grooves-grinds/grooves-grinds-main.png');
const TheSpot = require('../../assets/images/explore/the-spot/the-spot-main.png');
const Aurora = require('../../assets/images/explore/aurora/aurora.png');
const LinksComputer = require('../../assets/images/explore/links-computer/links-computer.png');

// Load links
const GroovesGrindsLink = "https://johnbentley.com/grooves-grinds";


export default class PersonalProjects extends Component {
  render() {
    return (
      // Slide menu inspiration from
      // Starter Page
      <div>
        {/* Blank Space */}
        <div className="blank-space">
          {/* <span className="year">2016</span> */}
        </div>

        {/* Personal Projects */}
        <section id="personal-projects">
            <div className="container">
                <div className="row">
                    <div className="col-xs-3">
                      <a href={GroovesGrindsLink} target="blank">
                        <img src={GroovesGrinds} />
                      </a>
                      <img src={LinksComputer} />
                    </div>
                    <div className="col-xs-6">
                        <h3>My own personal projects help me define what to focus on next.</h3>
                    </div>
                    <div className="col-xs-3">
                      <img src={TheSpot} />
                      <img src={Aurora} />
                    </div>
                </div>
            </div>
        </section>
      </div>
    )
  }
}
