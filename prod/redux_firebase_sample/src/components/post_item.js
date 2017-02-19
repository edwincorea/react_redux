import React from "react";

const PostItem = ({key, post, id}) => {    
    return (
        <li className="list-group-item" key={key}>
            {post}
            <button className="btn btn btn-danger pull-xs-right">Delete</button>
        </li>
    );
};

export default PostItem;