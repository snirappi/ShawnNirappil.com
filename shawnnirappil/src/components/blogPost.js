import React, { Component } from 'react';
import '../App.css';

class BlogPost extends Component {
    render() {
        if (this.props.post) {
            return (
                <div>
                    <h1 id={this.props.post.slug}><a href={"#blog/" + this.props.post.slug}>{this.props.post.title}</a></h1>
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