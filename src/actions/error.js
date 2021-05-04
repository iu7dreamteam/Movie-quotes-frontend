import * as types from '../constants/ActionTypes';

export const showError = (error, sender = null) => ({
    type: types.SHOW_ERROR,
    error,
    sender,
});

export const hideError = (sender = null) => ({
    type: types.HIDE_ERROR,
    sender,
});
