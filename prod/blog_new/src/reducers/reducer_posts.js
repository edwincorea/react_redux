import _ from "lodash";
import { FETCH_POSTS } from "../actions/index";

export default (state = {}, action) => {
    switch(action.type){
        case FETCH_POSTS:
            console.log(action.payload.data);
            // [ post1, post2 ] => { 4: post1, 5: post2 }            
            return _.mapKeys(action.payload.data, "_id");
        default:
            return state;
    }
};