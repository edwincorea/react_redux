import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";

class PostsShow extends Component {
    render(){
        return <div>Show post {this.props.params.id}</div>
    }
}

export default PostsShow;