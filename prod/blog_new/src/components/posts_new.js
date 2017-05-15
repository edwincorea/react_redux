import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";

class PostsNew extends Component {
    //by convention: field argument
    renderTitleField(field){
        return (
            <div>
                <input 
                  type="text"
                  {...field.input}                                  
                />
            </div>
        );
    }
    
    render() {
        return (
            <form>
                <Field
                  name="title"
                  component={this.renderTitleField}
                >                    
                </Field>
            </form>            
        );
    }
}

export default reduxForm({
    form: "PostsNewForm"
})(PostsNew);