import * as types from '../constants/ActionTypes';

import {
    saveUser,
    dropUser,
    getUser,
} from '../utility/memory/user';

const initialState = {
};

export default function user(state = initialState, action) {
    switch (action.type) {
    case types.LOAD_USER:
        return getUser();
    case types.SIGN_IN:
        saveUser(action.value);
        return action.value;
    case types.SIGN_OUT:
        dropUser();
        return initialState;
    default:
        return state;
    }
}
