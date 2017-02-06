import {FETCH_WEATHER} from "../actions/index";

export default function(state = [], action){

    switch (action.type){
        case FETCH_WEATHER:
            //NEVER mutate state
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Accessor_methods
            //return state.push(action.payload.data);
            
            //return new array with data array added: pure function.
            //return state.concat([action.payload.data]);

            //Using ES6 spread syntax for arrays
            return [action.payload.data, ...state];
    }

    return state;
}