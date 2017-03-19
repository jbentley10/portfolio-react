import React, { Component } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

// Load Images
const PrototypeTutorial = require('../../assets/images/explore/cocooned/prototype-tutorial.jpg');
const Warp4 = require('../../assets/images/explore/warp/4.png');
const Cocooned1 = require('../../assets/images/explore/cocooned/1.png');

// Load Links
const WarpLink = "http://danielpagharion.com/project_warp/";
const CocoonedLink = "https://www.amazon.com/Damaged-Panda-Games-Cocooned/dp/B00LU3DP1C/ref=sr_1_1?ie=UTF8&qid=1489875221&sr=8-1&keywords=cocooned";

// Load styles
const CocoonedImageStyle = {
  backgroundImage: 'url(' + Cocooned1 + ')',
};
const WarpImageStyle = {
  backgroundImage: 'url(' + Warp4 + ')',
};

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
                      <a href={CocoonedLink} target="blank">
                        <div className="image-wrap">
                          <figure style={CocoonedImageStyle} />
                        </div>
                      </a>
                    </div>
                    <div className="col-xs-6 section-title">
                        <h3>My journey began with game development</h3>
                        <span>University of California, Santa Cruz  |  2010-2014</span>
                    </div>
                    <div className="col-xs-3">
                      <a href={WarpLink} target="blank">
                        <div className="image-wrap">
                          <figure style={WarpImageStyle} />
                        </div>
                      </a>
                    </div>
                </div>
            </div>
        </section>
      </div>
    )
  }
}
