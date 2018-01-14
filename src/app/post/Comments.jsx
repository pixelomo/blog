/**
 * @overview Comments component.
 */

import React, { Component } from 'react';
import Comment from './Comment';
import AddCommentForm from './AddCommentForm';

class Comments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  componentDidMount(){
    // Have to GET comments again since API is generating strings for new comments postId's when POSTing
    fetch('http://localhost:9001/posts/'+ this.props.postId +'/comments', {
    })
    .then( response => {
        return response.text();
    })
    .then( data => {
        this.setState({comments: JSON.parse(data)});
    })
  }

  addComment(commentData) {   
    this.setState({
      comments: this.state.comments.concat([commentData])
    });
  }

  renderComment(key){
    return (<Comment key={key} index={key} comments={this.state.comments[key]}/>)
  }

  render() { 
    let comments = Object.keys(this.state.comments).map(this.renderComment.bind(this));

    return(
      <div className="comments">
        <h5>Comments</h5>
        <div className="comment-wrap collection">
          <p className="no-comments">{comments.length <= 0 && 'No comments yet..'}</p>
          {comments}
        </div>
        <AddCommentForm postId={this.props.postId} addComment={this.addComment.bind(this)}/>
      </div>
    )
  }
}

export default Comments;