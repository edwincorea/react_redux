import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";

import {fetchPost, deletePost} from "../actions/index";

class PostsShow extends Component {
    static contextTypes = {
        router: PropTypes.object
    };
    
    componentWillMount(){        
        this.props.fetchPost(this.props.params.id);
    }

    onEditClick(){
        this.context.router.push(`/posts/edit/${this.props.params.id}`);
    }
    
    onDeleteClick(){
        this.props.deletePost(this.props.params.id)
            .then(() => {
                this.context.router.push("/");
            });
    }

    render(){
        const {post} = this.props;

        if (!post){
            return <div>Loading...</div>;
        }
        return (
            <div className="postInfo">
                <Link to="/">Back To Index</Link>
                <button 
                    className="btn btn-danger pull-xs-right" 
                    onClick={this.onDeleteClick.bind(this)}>Delete Post</button>
                <button 
                    className="btn btn btn-primary pull-xs-right" 
                    onClick={this.onEditClick.bind(this)}>Edit Post</button>                                    
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {post: state.posts.post};
};

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);