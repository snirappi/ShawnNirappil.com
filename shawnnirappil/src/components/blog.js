import React, { Component } from 'react';
import axios from 'axios';
import BlogPost from './blogPost';
import '../App.css';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }
    componentDidMount() {
        axios
            .get(
                "https://public-api.wordpress.com/rest/v1/sites/shawnnirappil.wordpress.com/posts"
            )
            .then(res => {
                this.setState({ posts: res.data.posts });
                this.jumpToBlogPost();
            })
            .catch(error => console.log(error));
    }
    jumpToBlogPost() {
        var re = /(.*\/blog\/)(.*)/
        var split = re.exec(window.location.href);
        if(split) {
            if(split[2] && document.getElementById(split[2]) !== null){
                document.getElementById(split[2]).scrollIntoView();
            } else if(split[1]) {
                window.location = split[1];
            }
        }
    }
    render() {
        return (
            <div className="Div-box">
                {this.state.posts.map(post => <BlogPost key={post.ID} post={post} />)}
            </div>
        );
    }
}
export default Blog;