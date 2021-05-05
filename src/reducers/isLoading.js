import * as types from '../constants/ActionTypes';

const initialState = false;

export default function isLoading(state = initialState, action) {
    switch (action.type) {
    case types.SHOW_LOADING_HOVER:
        return true;
    case types.HIDE_LOADING_HOVER:
        return false;
    default:
        return state;
    }
}
