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
import instagramIcon from './icons/instagram.svg';
import instagramIconFilled from './icons/instagram-filled.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <div className="Overview">
          <header className="Header">
            <h1 className="Header-title"><Link to={'/'} >Shawn Nirappil</Link></h1>
            <h2 className="Header-title"><Link to={'/blog'} >Blog</Link></h2>
            <h2 className="Header-title"><Link to={'/music'} >Music</Link></h2>
            {/*<h2 className="Header-title"><Link to={'/resume'} >Resume</Link></h2>*/}
            <div className="Header-border" />
          </header>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/blog' render={() => <Blog key={Date.now()}/>} />
            <Route path='/music' component={Music} />
            {/*<Route path='/resume' component={Resume} />*/}
          </Switch>
          <footer className="Footer">
            <div className="Icon-section">
              <div className="Icon-box">
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ShawnNirappil">
                  <img className="Link-icon" src={twitterIcon} alt="Twitter Icon" />
                  <img className="Hover-icon" src={twitterIconFilled} alt="Twitter Icon" />
                </a>
              </div>
              <div className="Icon-box">
                <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/nappysama">
                  <img className="Link-icon" src={soundCloudIcon} alt="Soundcloud Icon" />
                  <img className="Hover-icon" src={soundCloudIconFilled} alt="Soundcloud Icon" />
                </a>
              </div>
              <div className="Icon-box">
                <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/shawnnirappil">
                  <img className="Link-icon" src={instagramIcon} alt="Instagram Icon" />
                  <img className="Hover-icon" src={instagramIconFilled} alt="Instagram Icon" />
                </a>
              </div>
              <div className="Icon-box">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/snirappi">
                  <img className="Link-icon" src={githubIcon} alt="Github Icon" />
                  <img className="Hover-icon" src={githubIconFilled} alt="Github Icon" />
                </a>
              </div>              
              <div className="Icon-box">
                <a target="_blank" rel="noopener noreferrer" href="https://last.fm/user/beat80">
                  <img className="Link-icon" src={lastFmIcon} alt="Last.fm Icon" />
                  <img className="Hover-icon" src={lastFmIconFilled} alt="Last.fm Icon" />
                </a>
              </div>
              <div className="Icon-box">
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shawn-nirappil-81b72214a/">
                  <img className="Link-icon" src={linkedInIcon} alt="LinkedIn Icon" />
                  <img className="Hover-icon" src={linkedInIconFilled} alt="LinkedIn Icon" />
                </a>
              </div>
            </div>
            <p className="Credits">Icons made by <a target="_blank" rel="noopener noreferrer" href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a target="_blank" rel="noopener noreferrer" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
          </footer>
        </div>
      </HashRouter>
    );
  }
}

export default App;