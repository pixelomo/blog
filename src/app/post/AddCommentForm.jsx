/**
 * @overview Add Comments Form component.
 */

import React, { Component } from 'react';

class AddCommentForm extends Component {

  processComment(event){
    event.preventDefault();
    // generate date in year-month-day format
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    let newdate = year + "-" + month + "-" + day;

    fetch('http://localhost:9001/posts/'+ this.props.postId +'/comments', {
      "async": true,
      "crossDomain": true,
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "cache-control": "no-cache"
      },
      "processData": false,
      "body": "{\"user\": \""+ this.refs.name.value +"\", \"content\": \" "+ this.refs.desc.value +" \", \"date\": \" "+ newdate +" \"}"
    })
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      console.log(data)
      // 1. Take data from form
      let commentData = {
        user: this.refs.name.value,
        content: this.refs.desc.value,
        date: newdate
      }
      // 2. Pass data back to App
      this.props.addComment(commentData);
      // 3. Reset the form
      this.refs.commentForm.reset();
    })
  }

  render() { 
    return(
      <form className="post-edit" ref="commentForm" onSubmit={this.processComment.bind(this)}>
        <input type="text" ref="name" placeholder="Your name" required/>
        <textarea ref="desc" placeholder="Add your comment here" id="textarea1" className="materialize-textarea" required></textarea>
        <button id="submit" type="submit" className="waves-effect waves-light btn light-blue darken-4">Add Comment</button>
      </form>
    )
  }
}
export default AddCommentForm;