import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPosts} from "../actions";

class PostsIndex extends Component {
    componentDidMount(){
        //fetch some data 
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                Posts Index
            </div>
        );
    }
}

export default connect(null, {fetchPosts})(PostsIndex);