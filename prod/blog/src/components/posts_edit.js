import React, {Component, PropTypes} from "react";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Link} from "react-router";

import {fetchPost, editPost} from "../actions/index";

import {FIELDS} from "./posts_form_fields";

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

    renderField(fieldConfig, fieldKey){
        //Object provided by Redux-Form
        const fieldHelper = this.props.fields[fieldKey];   

        return (
            <div className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? "has-danger" : ""}`} key={fieldKey}>
                <label>{fieldConfig.label}</label>
                <fieldConfig.type type="text" className="form-control" {...fieldHelper}/>
                <div className="text-help">
                    {fieldHelper.touched ? fieldHelper.error : ""}
                </div>
            </div>            
        );
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
                {_.map(FIELDS, this.renderField.bind(this))}
                <button type="submit" className="btn btn-primary">Submit</button>        
                <Link to={`posts/${this.props.params.id}`} className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

//Redux Form Validation function
const validate = (values) => {
    const errors = {};

    //https://lodash.com/docs#forEach
    //(value, key) =>
    _.each(FIELDS, (fieldConfig, fieldKey) => {
        if (!values[fieldKey]){
            errors[fieldKey] = `Enter a ${fieldKey}`;
        }        
    });

    return errors;
};

const mapStateToProps = (state) => {
    return {post: state.posts.post};
};

//connect: first argument is mapStateToProps, second is mapDispatchToProps
//reduxForm: first argument is form config, second is mapStateToProps, third is mapDispatchToProps
export default reduxForm({
    form: "PostsEditForm",
    fields: _.keys(FIELDS),
    validate
}, mapStateToProps, {fetchPost, editPost}) (PostsEdit);