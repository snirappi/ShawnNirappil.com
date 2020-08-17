import React, { Component } from 'react';
import Face from '../icons/face.jpg';

import '../App.css';

class Home extends Component {
    render() {
        return (
            <div class="Div-box">
                <img class="Face-img" src={Face} alt="My Face"/>
                <h3>About Me</h3>
                <p>Full Stack Engineer | I &#9829; Music | Chicago</p>
            </div>
        );
    }
}
export default Home;