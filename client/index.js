// React
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Header from './components/header/Header.jsx';
import AboutMe from './components/about-me/AboutMe.jsx';
import UCSC from './components/ucsc/UCSC.jsx';
import LeapFrog from './components/leapfrog/LeapFrog.jsx';
import IDTech from './components/idtech/IDTech.jsx';
import PersonalProjects from './components/personal-projects/PersonalProjects.jsx';
import Message from './components/message/Message.jsx';

// Stylesheets
require('./stylesheets/app.scss');

ReactDOM.render(
  <div>
    <Header />
    <AboutMe />
    <UCSC />
    <LeapFrog />
    <IDTech />
    <PersonalProjects />
    <Message />
  </div>,
  document.getElementById('root')
);
