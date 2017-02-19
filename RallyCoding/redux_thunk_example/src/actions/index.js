import axios from "axios";

export const FETCH_PROFILES = "FETCH_PROFILES";

export const fetchUsers = () => {
    const request = axios.get("http://jsonplaceholder.typicode.com/users");

    // Vanilla redux expects us to return an action object.
    // With redux-thunk we return a function
    return (dispatch) => {
        request.then(({data}) => {
            dispatch({
                type: FETCH_PROFILES,
                payload: data
            });
        });      
    };
};