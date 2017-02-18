import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router"; //anchor component

import {fetchPosts} from "../actions/index";

class PostsIndex extends Component {
    //Lifecycle methods
    //https://facebook.github.io/react/docs/react-component.html
    componentWillMount(){        
        this.props.fetchPosts();
    }

    render(){
        return (            
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                List of blog posts.
            </div>
        );
    }
}

export default connect(null, {fetchPosts})(PostsIndex);