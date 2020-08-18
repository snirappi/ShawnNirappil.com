import React, { Component } from 'react';
import Face from '../icons/face.jpg';

import '../App.css';

class Home extends Component {
    constructor(props){
        super();
        this.tweets = ['Taste cannot be bought',
        'Reality hears our desires',
        'Crucify Yourself',
        '“Everything is a social construct” is preparation for a post physical reality',
        'First Sunburn Age 25',
        'Anger is Energy',
        'The first step is awareness',
        'No greater feeling than winning a 6 hour board game',
        'TLC shows feed our schadenfreude',
        'Just tell people their opinion',
        'The most important thing in life is boolin',
        'You have never spoken to another person\nYou are only ever speaking to yourself',
        'Belief -> Heuristic -> Action',
        'Currently Playing: Girly Pop & Dark Techno',
        'What ideologies are you enslaved to?',
        'Everything is a cult',
        'Saying \'Obviously\' is rude',
        'It wouldn\'t be a good story if everything went smoothly',
        'Two people experience the same phenomenon and walk away with different interpretations',
        'You are free to interpret the reality you wish',
        'Thought/Belief <--> Reality\nChoose wisely',
        'There is no greater feeling than finding out the name of that song',
        'Every thought, every word spoken, is a conversation convincing ourselves of the reality we truly wish to live in.'
        ];
    };
    randomTweet(tweets){
        return tweets[Math.round(Math.random() * tweets.length)];
    };
    render() {
        return (
            <div class="Div-box">
                <img class="Face-img" src={Face} alt="My Face"/>
                <h3>About Me</h3>
                <p>Full Stack Engineer | I &#9829; Music | Chicago</p>
                <i class="Tweet">{this.randomTweet(this.tweets)}</i>
            </div>
        );
    }
}
export default Home;