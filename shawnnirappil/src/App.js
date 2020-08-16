import React from 'react';
import twitterIcon from './icons/twitter.svg';
import twitterIconFilled from './icons/twitter-filled.svg';
import soundCloudIcon from './icons/soundcloud.svg';
import soundCloudIconFilled from './icons/soundcloud-filled.svg';
import lastFmIcon from './icons/lastfm.svg';
import lastFmIconFilled from './icons/lastfm-filled.svg';
import linkedInIcon from './icons/linkedin.svg';
import linkedInIconFilled from './icons/linkedin-filled.svg';

import './App.css';

function App() {
  return (

    <div className="Overview">
      <h1>Shawn Nirappil</h1>
      <div class="Icon-section">
        <div class="Icon-box">
          <a href="https://twitter.com/ShawnNirappil">
            <img class="Link-icon" src={twitterIcon} />
            <img class="Hover-icon" src={twitterIconFilled} />
          </a>
        </div>
        <div class="Icon-box">
          <a href="https://soundcloud.com/nappysama">
            <img class="Link-icon" src={soundCloudIcon} />
            <img class="Hover-icon" src={soundCloudIconFilled} />
          </a>
        </div>
        <div class="Icon-box">
          <a href="https://last.fm/user/beat80">
            <img class="Link-icon" src={lastFmIcon} />
            <img class="Hover-icon" src={lastFmIconFilled} />
          </a>
        </div>
        <div class="Icon-box">
          <a href="https://www.linkedin.com/in/shawn-nirappil-81b72214a/">
            <img class="Link-icon" src={linkedInIcon} />
            <img class="Hover-icon" src={linkedInIconFilled} />
          </a>
        </div>
      </div>
      <footer>
        Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </footer>
    </div>


  );
}

export default App;
