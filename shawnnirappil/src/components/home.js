import React, { Component } from 'react';
import Face from '../icons/face.jpg';

import '../App.css';

class Home extends Component {
    render() {
        return (
            <div class="Div-box">
                <img class="Face-img" src={Face} alt="My Face"/>
            </div>
        );
    }
}
export default Home;