import axios from "axios";

export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";
export const FETCH_POST = "FETCH_POST";
export const DELETE_POST = "DELETE_POST";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=dfsdsfdsfds";

//This action creator has the purpose of reaching out
//and grab the list of posts from API.
export const fetchPosts = () => {    
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {        
        type: FETCH_POSTS,
        payload: request
    };
};

//Action creator for handleSubmit.
export const createPost = (props) => {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);    

    return {
        type: CREATE_POST,
        payload: request
    };
};

export const fetchPost = (id) => {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    };    
}

export const deletePost = (id) => {
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: DELETE_POST,
        payload: request
    };    
}