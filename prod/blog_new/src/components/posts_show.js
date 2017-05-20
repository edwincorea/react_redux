import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPost} from "../actions";

class PostsShow extends Component {
    componentDidMount(){
        //react-router wildcard tokens such as :id. Destructure id token from params.
        const {id} = this.props.match.params;
        this.props.fetchPost(id);
    }
    
    render() {
        return (
            <div>
                Posts Show!
            </div>
        );
    }
}

const mapStateToProps = ({posts}, ownProps) => {
    //This would return all posts to props.
    //return {posts};

    //return just one post
    return {post: posts[ownProps.match.params.id]};
};

export default connect(mapStateToProps, {fetchPost})(PostsShow);