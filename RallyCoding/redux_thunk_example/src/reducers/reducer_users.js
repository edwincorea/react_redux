import { FETCH_PROFILES } from "../actions/index";

const INITIAL_STATE = {all: []};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_PROFILES:
            return {...state, all: action.payload};
        default:
            return state;
    }
};