import axios from "axios";

export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";

//const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const ROOT_URL = "http://localhost:3050/api";

const API_KEY = "?key=PAPERCLIP1234";

//This action creator has the purpose of reaching out
//and grab the list of posts from API.
export const fetchPosts = () => {    
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {        
        type: FETCH_POSTS,
        payload: request
    };
};

export const createPost = (values, callback) => {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
                         .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    }
};
