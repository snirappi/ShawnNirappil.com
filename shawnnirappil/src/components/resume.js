import React, { Component } from 'react';
import ResumePDF from '../static/ShawnNirappilResume.pdf';

import '../App.css';

class Resume extends Component {
    render() {
        return (
            <div class="Div-box Resume-box">
                <embed title="Shawn Nirappil Resume" class="Resume" src={ResumePDF} />
            </div>
        );
    }
}
export default Resume;