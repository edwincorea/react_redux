import _ from "lodash";
import React, { Component } from 'react';
import {connect} from "react-redux";

import {fetchPosts, createPost} from "../actions";
import PostItem from "./post_item";

class App extends Component {
  state = {post: ""};

  componentWillMount(){
    this.props.fetchPosts();
  }

  handleInputChange(event) {
    this.setState({post: event.target.value});
  }

  handleFormSubmit(event){
    event.preventDefault();

    this.props.createPost(this.state.post);
  }

  renderPosts(){
    return _.map(this.props.posts, (post, key) => {
      return <PostItem key={key} post={post} id={key} />
    });
  }

  render() {
    return (
      <div>
        <h4>Create a Post</h4>
        <form onSubmit={this.handleFormSubmit.bind(this)} className="form-inline">
          <div className="form-group">
            <input 
              className="form-control"
              placeholder="Add a post"
              value={this.state.post}
              onChange={this.handleInputChange.bind(this)} />
            <button action="submit" className="btn btn-primary">Create Post</button>
          </div>
        </form>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

export default connect(null, {fetchPosts, createPost})(App);