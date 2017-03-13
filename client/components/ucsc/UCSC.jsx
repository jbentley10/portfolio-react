import React, { Component } from 'react';

// Load Images
const PrototypeTutorial = require('../../assets/images/explore/cocooned/prototype-tutorial.jpg');
const Warp4 = require('../../assets/images/explore/warp/4.png');
const Cocooned1 = require('../../assets/images/explore/cocooned/1.png');

export default class UCSC extends Component {
  render() {
    return (
      <div>
        {/* Blank Space */}
        <div className="blank-space">
          {/* <span className="year">2010</span> */}
        </div>

        {/* UCSC */}
        <section id="ucsc">
            <div className="container">
                <div className="row">
                    <div className="col-xs-3">
                        {/* <img src={PrototypeTutorial} /> */}
                        <img src={Cocooned1} />
                    </div>
                    <div className="col-xs-6 section-title">
                        <h3>My journey began with game development</h3>
                        <span>University of California, Santa Cruz  |  2010-2014</span>
                    </div>
                    <div className="col-xs-3">
                        <img src={Warp4} />
                    </div>
                </div>
            </div>
        </section>
      </div>
    )
  }
}
