import Firebase from "firebase";
import _ from "lodash";
import {
    FETCH_POSTS,
    CREATE_POST,
    DELETE_POST
} from "./types";

const Posts = new Firebase("https://fbredux.firebaseio.com/");
console.log(Posts);

export const fetchPosts = () => {
    return dispatch => {
        Posts.on("value", snapshot => {                                    
            dispatch({
                type: FETCH_POSTS,
                payload: snapshot.val()
            });
        });
    };
};

export const createPost = (post) => {
    return dispatch => Posts.push(post);
};

export const deletePost = (key) => {
    return dispatch => Posts.child(key).remove();
};