import * as types from '../constants/ActionTypes';

const initialState = false;

export default function isLoading(state = initialState, action) {
    switch (action.type) {
    case types.SET_LOADING_HOVER:
        return true;
    case types.UNSET_LOADING_HOVER:
        return false;
    default:
        return state;
    }
}
