import React, { Component } from 'react';
import albumsImage from '../static/albums.jpg';
import '../App.css';

class Music extends Component {
    render() {
        return (
            <div class="Div-box">
                <div>
                    <h3>My Tracks</h3>
                    <iframe title="tracks" height="450" width="70%" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1130901286&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                </div>
                <div class="Albums">
                    <h3>Albums I've Been Listening To</h3>                    
                    <img class="Albums Border-box" src={albumsImage} alt="Albums" />
                </div>
                <div class="Dance-section">
                    <h3>Dance Music</h3>
                    <div class="Dance-section">
                        <h4>Mixes</h4>
                        <iframe class="Youtube" title="Dance Mixes" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLnLjHLHuZmGIKvh5s6EMdln5fZjpCn9U7" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="Dance-section">
                        <h4>Singles</h4>
                        <iframe class="Youtube" title="Dance Singles" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLnLjHLHuZmGJnkEgPssrwsaM3nBp1cKeb" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div>
                    <h3>My Taste</h3>
                    <p>I have found myself all over the musical spectrum. These days, I primarily listen to Techno, Baroque Pop, and Alternative Pop.</p>
                </div>
            </div>
        );
    }
}
export default Music;