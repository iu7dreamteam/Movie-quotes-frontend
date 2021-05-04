import * as types from '../constants/ActionTypes';

export const showLoadingHover = (sender = null) => ({
    type: types.SHOW_LOADING_HOVER,
    sender,
});

export const hideLoadingHover = (sender = null) => ({
    type: types.HIDE_LOADING_HOVER,
    sender,
});
