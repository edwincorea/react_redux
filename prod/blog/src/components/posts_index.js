import React, {Component} from "react";
import {connect} from "react-redux";
//import {bindActionCreators} from "redux";

import {fetchPosts} from "../actions/index";

class PostsIndex extends Component {
    //Lifecycle methods
    //https://facebook.github.io/react/docs/react-component.html
    componentWillMount(){        
        this.props.fetchPosts();
    }

    render(){
        return (
            <div>List of blog posts.</div>
        );
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({fetchPosts}, dispatch);
// };

//mapStateToProps is null here...

//export default connect(null, mapDispatchToProps)(PostsIndex);
//export default connect(null, {fetchPosts: fetchPosts})(PostsIndex);
export default connect(null, {fetchPosts})(PostsIndex);