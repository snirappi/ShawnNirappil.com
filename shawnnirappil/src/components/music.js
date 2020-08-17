import React, { Component } from 'react';
import albumsImage from '../static/albums.jpg';
import '../App.css';

class Music extends Component {
    render() {
        return (
            <div class="Div-box">
                <div class="Albums">
                    <h3>Albums I've Been Listening To</h3>
                    <img src={albumsImage} alt="Albums" />
                </div>
                <div class="Dance-section">
                    <h3>Dance Music</h3>
                    <div class="Dance-section">
                        <h4>Mixes</h4>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLnLjHLHuZmGIKvh5s6EMdln5fZjpCn9U7" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="Dance-section">
                        <h4>Singles</h4>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLnLjHLHuZmGJnkEgPssrwsaM3nBp1cKeb" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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