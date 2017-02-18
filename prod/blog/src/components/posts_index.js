import React, {Component} from "react";

class PostsIndex extends Component {
    //Lifecycle methods
    //https://facebook.github.io/react/docs/react-component.html
    componentWillMount(){        
        console.log("this will be a good time to call an action creator to fetch posts");
    }

    render(){
        return (
            <div>List of blog posts.</div>
        );
    }
}

export default PostsIndex;