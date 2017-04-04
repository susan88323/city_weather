import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // Don't use 'push' since we should never mutate state directly
            // Instead, we create a new instance of state and return it
            //return state.concat([action.payload.data]);
            // Or
            return [action.payload.data, ...state];
    }
    return state;
}