import * as types from '../constants/ActionTypes';

const initialState = null;

export default function error(state = initialState, action) {
    switch (action.type) {
    case types.SHOW_ERROR:
        return action.error;
    case types.HIDE_ERROR:
        return initialState;
    default:
        return state;
    }
}
