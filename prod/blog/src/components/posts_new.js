import _ from "lodash";
import React, {Component, PropTypes} from "react";
import {reduxForm} from "redux-form";
import {Link} from "react-router";

import {createPost} from "../actions/index";

import {FIELDS} from "./posts_form_fields";

class PostsNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props){
        this.props.createPost(props)
            .then(() => {
                // blog post has been created, navigate the user to index
                // we navigate by calling this.context.router.push with the 
                // new path to navigate to.
                this.context.router.push("/");
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
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create A New Post</h3>
                {_.map(FIELDS, this.renderField.bind(this))}
                <button type="submit" className="btn btn-primary">Submit</button>        
                <Link to="/" className="btn btn-danger">Cancel</Link>
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

//connect: first argument is mapStateToProps, second is mapDispatchToProps
//reduxForm: first argument is form config, second is mapStateToProps, third is mapDispatchToProps
export default reduxForm({
    form: "PostsNewForm",
    fields: _.keys(FIELDS),
    validate
}, null, {createPost}) (PostsNew);