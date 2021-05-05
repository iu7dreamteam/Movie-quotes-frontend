import * as types from '../constants/ActionTypes';

const initialState = {
    watches: [],
};

export default function watchHistory(state = initialState, action) {
    switch (action.type) {
    case types.SHOW_WATCH_HISTORY:
        return action.value;
    case types.SAVE_WATCH_TO_HISTORY:
        return state;
    default:
        return state;
    }
}
