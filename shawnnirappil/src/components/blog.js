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
                console.log(this.state.posts);
            })
            .catch(error => console.log(error));
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