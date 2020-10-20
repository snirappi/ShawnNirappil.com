import React, { Component } from 'react';
import '../App.css';

class BlogPost extends Component {
    render() {
        if (this.props.post) {
            return (
                <div>
                    <h1>{this.props.post.title}</h1>
                    <h5>{new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "long", 
                        day: "2-digit"
                    }).format(new Date(this.props.post.date))}</h5>
                    <div className="Blog-post" dangerouslySetInnerHTML={{ __html: this.props.post.content }} />
                </div>
            );
        } else {
            return null;
        }
    }
}
export default BlogPost;