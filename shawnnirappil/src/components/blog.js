import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BlogPost from './blogPost';
import '../App.css';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            filteredPosts: [],
            selectedSlug : ""
        };
    }
    componentDidMount() {
        axios
            .get(
                "https://public-api.wordpress.com/rest/v1/sites/shawnnirappil.wordpress.com/posts"
            )
            .then(res => {
                console.log('Pulled')
                this.setState({ posts: res.data.posts, filteredPosts: res.data.posts });
                this.selectPostFromSlugURL();
            })
            .catch(error => console.log(error));
    }
    selectPostFromSlugURL() {
        var re = /(.*\/blog\/)(.*)/
        var split = re.exec(window.location.href);
        if(split) {
            if(split[2] && document.getElementById(split[2]) !== null){
                this.setState({ selectedSlug: split[2] })
            } else if(split[1]) {
                window.location = split[1];
            }
        }
        this.state.posts.forEach(post => {
            if(post.slug === this.state.selectedSlug) {
                console.log(post)
                this.setState( {filteredPosts: [post]} );
                return;
            }
        });
    }
    
    render() {
        return (
            <div className="Div-box">
                {this.state.filteredPosts.map(post => <BlogPost key={post.ID} post={post} />)}
                {this.state.filteredPosts.length !== this.state.posts.length && <Link className="Return-link" to={'/blog'} >Return</Link>}
            </div>
        );
    }
}
export default Blog;