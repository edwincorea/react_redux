import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";

class PostsNew extends Component {
    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    //by convention: field argument
    renderField(field){
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input 
                  className="form-control"
                  type="text"
                  {...field.input}                                  
                />
                {field.meta.touched ? field.meta.error: ""}
            </div>
        );
    }

    onSubmit(values){

    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <Field
                  label="Title For Post"
                  name="title"
                  component={this.renderField}
                />
                <Field
                  label="Categories"
                  name="categories"
                  component={this.renderField}
                />                
                <Field
                  label="Post Content"
                  name="content"
                  component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>            
        );
    }
}

//redux-form validate function. By convention: "values" parameter
const validate = (values) => {
    //console.log(values) -> {title: 'asdf', categories: 'asdf', content: 'asdf'}
    const errors = {};

    // Validate inputs from 'values' object
    if (!values.title) {
        errors.title = "Enter a title";
    }
    // if (values.title.length < 3) {
    //     errors.title = "Title must be at least 3 characters!";
    // }    
    if (!values.categories) {
        errors.categories = "Enter some categories";
    }
    if (!values.content) {
        errors.content = "Enter some content please";
    }    

    // If errors is empty, the form is fine to submit.
    // If errors has *any* properties, redux form assumes form is invalid. 
    return errors;
}

export default reduxForm({
    validate, 
    form: "PostsNewForm"
})(PostsNew);