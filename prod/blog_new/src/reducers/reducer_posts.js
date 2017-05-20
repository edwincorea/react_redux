import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

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
            return { ...state, [action.payload.data._id]: action.payload.data };
        case DELETE_POST:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};