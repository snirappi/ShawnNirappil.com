import React, { Component } from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Music from './components/music';
import Resume from './components/resume';
import Blog from './components/blog';

import githubIcon from './icons/github.svg';
import githubIconFilled from './icons/github-filled.svg';
import twitterIcon from './icons/twitter.svg';
import twitterIconFilled from './icons/twitter-filled.svg';
import soundCloudIcon from './icons/soundcloud.svg';
import soundCloudIconFilled from './icons/soundcloud-filled.svg';
import lastFmIcon from './icons/lastfm.svg';
import lastFmIconFilled from './icons/lastfm-filled.svg';
import linkedInIcon from './icons/linkedin.svg';
import linkedInIconFilled from './icons/linkedin-filled.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <div class="Overview">
          <header class="Header">
            <h1 class="Header-title"><Link to={'/'} >Shawn Nirappil</Link></h1>
            <h2 class="Header-title"><Link to={'/blog'} >Blog</Link></h2>
            <h2 class="Header-title"><Link to={'/music'} >Music</Link></h2>
            <h2 class="Header-title"><Link to={'/resume'} >Resume</Link></h2>
            <div class="Header-border" />
          </header>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/blog' component={Blog} />
            <Route path='/music' component={Music} />
            <Route path='/resume' component={Resume} />
          </Switch>
          <footer class="Footer">
            <div class="Icon-section">
            <div class="Icon-box">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/snirappi">
                  <img class="Link-icon" src={githubIcon} alt="Github Icon" />
                  <img class="Hover-icon" src={githubIconFilled} alt="Github Icon" />
                </a>
              </div>
              <div class="Icon-box">
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ShawnNirappil">
                  <img class="Link-icon" src={twitterIcon} alt="Twitter Icon" />
                  <img class="Hover-icon" src={twitterIconFilled} alt="Twitter Icon" />
                </a>
              </div>
              <div class="Icon-box">
                <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/nappysama">
                  <img class="Link-icon" src={soundCloudIcon} alt="Soundcloud Icon" />
                  <img class="Hover-icon" src={soundCloudIconFilled} alt="Soundcloud Icon" />
                </a>
              </div>
              <div class="Icon-box">
                <a target="_blank" rel="noopener noreferrer" href="https://last.fm/user/beat80">
                  <img class="Link-icon" src={lastFmIcon} alt="Last.fm Icon" />
                  <img class="Hover-icon" src={lastFmIconFilled} alt="Last.fm Icon" />
                </a>
              </div>
              <div class="Icon-box">
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shawn-nirappil-81b72214a/">
                  <img class="Link-icon" src={linkedInIcon} alt="LinkedIn Icon" />
                  <img class="Hover-icon" src={linkedInIconFilled} alt="LinkedIn Icon" />
                </a>
              </div>
            </div>
            <p class="Credits">Icons made by <a target="_blank" rel="noopener noreferrer" href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a target="_blank" rel="noopener noreferrer" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
          </footer>
        </div>
      </HashRouter>
    );
  }
}

export default App;