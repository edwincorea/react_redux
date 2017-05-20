import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchPost} from "../actions";

class PostsShow extends Component {
    componentDidMount(){
        //react-router wildcard tokens such as :id. Destructure id token from params.
        const {id} = this.props.match.params;
        this.props.fetchPost(id);        
    }
    
    render() {
        const {post} = this.props;

        if(!post) {
            return <div>Loading...</div>
        }
        
        return (
            <div>
                <Link to="/">Back To Index</Link>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
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