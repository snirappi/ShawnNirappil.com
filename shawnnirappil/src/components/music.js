import React, { Component } from 'react';
import albumsImage from '../static/albums.jpg';
import '../App.css';

class Music extends Component {
    render() {
        return (
            <div class="Div-box">
                <div class="Albums">
                    <h3>Albums in Heavy Rotation</h3>
                    <img src={albumsImage} alt="Albums" />
                </div>
                <div class="Mixes">
                    <h3>Mixes</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLnLjHLHuZmGIKvh5s6EMdln5fZjpCn9U7" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        );
    }
}
export default Music;