import React, {Component, PropTypes} from "react";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Link} from "react-router";

import {fetchPost, editPost} from "../actions/index";

class PostsEdit extends Component {
    static contextTypes = {
        router: PropTypes.object
    };
    
    componentWillMount(){        
        this.props.fetchPost(this.props.params.id);
    }

    onSubmit(props){
        this.props.editPost(this.props.params.id, props)
            .then(() => {
                this.context.router.push(`posts/${this.props.params.id}`);
            });
    }

    render(){
        const {fields: {title, categories, content}, handleSubmit} = this.props;
        const {post} = this.props;

        if (!post){
            return <div>Loading...</div>;
        }
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Edit Post</h3>
                <div className={`form-group ${title.touched && title.invalid ? "has-danger" : ""}`}>
                    <label>Title</label>
                    <input type="text" value={post.title} className="form-control" {...title}/>
                    <div className="text-help">
                        {title.touched ? title.error : ""}
                    </div>
                </div>
                <div className={`form-group ${categories.touched && categories.invalid ? "has-danger" : ""}`}>
                    <label>Categories</label>
                    <input type="text" value={post.categories} className="form-control" {...categories}/>
                    <div className="text-help">
                        {categories.touched ? categories.error : ""}
                    </div>                    
                </div>
                <div className={`form-group ${content.touched && content.invalid ? "has-danger" : ""}`}>
                    <label>Content</label>
                    <textarea value={post.content} className="form-control" {...content}/>
                    <div className="text-help">
                        {content.touched ? content.error : ""}
                    </div>                    
                </div>        

                <button type="submit" className="btn btn-primary">Submit</button>        
                <Link to={`posts/${this.props.params.id}`} className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

//Redux Form Validation function
const validate = (values) => {
    const errors = {};

    if (!values.title){
        errors.title = "Enter a title";
    }

    if (!values.categories){
        errors.categories = "Enter categories";
    }
    if (!values.content){
        errors.content = "Enter some content";
    }

    return errors;
};

const mapStateToProps = (state) => {
    return {post: state.posts.post};
};

//connect: first argument is mapStateToProps, second is mapDispatchToProps
//reduxForm: first argument is form config, second is mapStateToProps, third is mapDispatchToProps
export default reduxForm({
    form: "PostsEditForm",
    fields: ["title", "categories", "content"],
    validate
}, mapStateToProps, {fetchPost, editPost}) (PostsEdit);