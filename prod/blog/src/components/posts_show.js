import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";

import {fetchPost} from "../actions/index";

class PostsShow extends Component {
    componentWillMount(){        
        this.props.fetchPost(this.props.params.id);
    }

    render(){
        return (
            <div>
                
            </div>
        );
    }
}

export default connect(null, {fetchPost})(PostsShow);