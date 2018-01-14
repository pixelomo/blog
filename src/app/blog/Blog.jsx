/**
 * @overview Blog page.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount(){
    // get posts sorted by publish date
    fetch('http://localhost:9001/posts?_embed=comments&_sort=publish_date&_order=asc', {
    })
    .then( response => {
        return response.text();
    })
    .then( data => {
        this.setState({posts: JSON.parse(data)});
    })
  }

  render() { 
    return(
      <section className="container">
        {this.state.posts.map(post => 
            <div className="post horizontal grey lighten-4 col s12 m9 row" key={post.id} id={post.id}>
              <div className="card">
                <div className="card-image">
                  <img src="http://lorempixel.com/400/200/cats"/> 
                  <span className="card-title"><h5>{post.title}</h5></span>
                </div>
                <div className="card-content">
                  <p className="right">{post.author}</p>
                  <p className="right">{post.publish_date}</p>
                  <p>{post.description}</p>
                </div>
                <div>
                  {/* pass data to post component */}
                  <Link className="right waves-effect waves-light btn light-blue darken-4" to={{ pathname: `/blog/${post.id}`, query: {
                    title: post.title, 
                    publish_date: post.publish_date,
                    author: post.author,
                    content: post.content,
                    comments: JSON.stringify(post.comments)
                  } }}>Read More...</Link>
                </div>
              </div>
            </div>
        )}
      </section>
    )
  }
}

export default Blog;