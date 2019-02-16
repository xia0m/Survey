import {FETCH_SURVEYS, FETCH_RECENT_SURVEYS} from '../actions/types';



export default function(state=[],action) {
    
    switch(action.type){
        case FETCH_SURVEYS:
            return action.payload;
        case FETCH_RECENT_SURVEYS:
            return action.payload;
        default:
            return state;
    }
}