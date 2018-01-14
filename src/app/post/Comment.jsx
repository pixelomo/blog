/**
 * @overview New Comment component.
 */

import React, { Component } from 'react';

class Comment extends Component {

  render(){
    return (
        <div className="comment collection-item" key={this.props.comments.id}>
          <h5>{this.props.comments.user}<span className="right">{this.props.comments.date}</span></h5>
          <p>{this.props.comments.content}</p>
        </div>
    )
  }
}

export default Comment;