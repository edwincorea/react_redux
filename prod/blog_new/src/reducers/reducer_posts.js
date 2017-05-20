import _ from "lodash";
import { FETCH_POSTS, FETCH_POST } from "../actions/index";

export default (state = {}, action) => {
    switch(action.type){        
        case FETCH_POSTS:
            //console.log(action.payload.data);
            // [ post1, post2 ] => { 4: post1, 5: post2 }            
            return _.mapKeys(action.payload.data, "_id");
        case FETCH_POST:
            //ES5
            // const post = action.payload.data;
            // const newState = {...state};
            // newState[post.id] = post;
            // return newState;

            //ES6: key interpolation            
            return {...state, [action.payload.data.id]: action.payload.data};

        default:
            return state;
    }
};