import Firebase from "firebase";
import _ from "lodash";
import {
    FETCH_POSTS,
    CREATE_POST,
    DELETE_POST
} from "./types";

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCDW-Q_mPx3usxxZbv6O20R4Xy7C-c9VNY",
    authDomain: "fblab-d3815.firebaseapp.com",
    databaseURL: "https://fblab-d3815.firebaseio.com",
    storageBucket: "fblab-d3815.appspot.com",
    messagingSenderId: "290016576987"
};
const Posts = Firebase.initializeApp(config).database().ref('/');

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

    return {
        type: DELETE_POST,
        payload: key
    };
};