import * as types from '../constants/ActionTypes';

const initialState = {
    quote: null,
    matches: [],
};

export default function searchResult(state = initialState, action) {
    switch (action.type) {
    case types.SEARCH_MATCHES:
        return action.value;
    default:
        return state;
    }
}
