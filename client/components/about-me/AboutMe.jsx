import React, { Component } from 'react';
const MeCoding = require('../../assets/images/welcome/me-coding.jpg');
const UserTesting = require('../../assets/images/explore/user-testing.png');

// Styles
let MovingImage = { transform: 'translateY(0px)' };
let itemTranslate = 0;

// window.addEventListener('scroll', (event) => {
//   let scrollTop = event.srcElement.body.scrollTop,
//       itemTranslate = Math.min(0, scrollTop/3 - 60) + .5;
//
//   console.log("Item translate: " + itemTranslate);
//
//   MovingImage.transform = 'translateY(' + itemTranslate + 'px)';
// });

function componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
};

function componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
};

function handleScroll(event) {
    let scrollTop = event.srcElement.body.scrollTop;
    let itemTranslate = Math.min(0, scrollTop/3 - 60);
    console.log("item translate: " + itemTranslate);

    this.setState({
      transform: itemTranslate
    });
};

export default class AboutMe extends Component {
  render() {
    return (
      // Slide menu inspiration from
      // Starter Page
      <div>
        {/* About Me */}
        <section id="about-me">
            <h2>Hi!</h2>
            <h2>My name is John, but most people call me Bentley.</h2>
            <h2>I am a web designer and developer with a passion
              for building great digital experiences.</h2>
            <h2>Thanks for checking out some of my work!</h2>

            <div className="container">
                <div className="row">
                    <div className="col-xs-3">
                        <img src={MeCoding} alt="John Coding" style={MovingImage}/>
                    </div>
                    <div className="col-xs-6"></div>
                    <div className="col-xs-3">
                        <img src={UserTesting} alt="User Testing at iD Tech" />
                    </div>
                </div>
              </div>
        </section>
      </div>
    )
  }
}
