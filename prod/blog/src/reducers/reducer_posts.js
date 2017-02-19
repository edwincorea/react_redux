import { FETCH_POSTS, FETCH_POST, EDIT_POST } from "../actions/index";

const INITIAL_STATE = {all: [], post: null};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_POSTS:
            return {...state, all: action.payload.data};
        case FETCH_POST:
        case EDIT_POST:
            return {...state, post: action.payload.data};            
        default:
            return state;
    }
};