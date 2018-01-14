/**
 * @overview Individual Post page.
 */
import React, { Component } from 'react';
import Comments from './Comments';

class Post extends Component {

  render() { 
    return(
      <div className="row">
        <p className="right">{this.props.location.query.publish_date}</p>
        <h5>{this.props.location.query.title}</h5>
        <p>{this.props.location.query.author}</p>
        <p dangerouslySetInnerHTML={{ __html: this.props.location.query.content }}></p>
        <img src="http://lorempixel.com/400/200/cats"/> 
        <Comments postId={parseInt(this.props.params.id)} comments={JSON.parse(this.props.location.query.comments)} />
      </div>
    )
  }
}

export default Post;
