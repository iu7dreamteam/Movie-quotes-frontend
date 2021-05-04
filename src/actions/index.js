import * as types from '../constants/ActionTypes';
import * as conf from '../config';

export const showLoadingHover = (sender = null) => ({
    type: types.SHOW_LOADING_HOVER,
    sender,
});
export const hideLoadingHover = (sender = null) => ({
    type: types.HIDE_LOADING_HOVER,
    sender,
});

export const showError = (error, sender = null) => ({
    type: types.SHOW_ERROR,
    error,
    sender,
});
export const hideError = (sender = null) => ({
    type: types.HIDE_ERROR,
    sender,
});

export const loadUserFromMemory = (sender = null) => ({
    type: types.LOAD_USER,
    sender,
});

export function signIn(email, password, sender = null) {
    return (dispatch) => {
        dispatch(showLoadingHover(sender));

        fetch(`/${conf.api}/session/login/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                }
                return Promise.reject(new Error(
                    `status=${response.status}; message=${response.statusText}`,
                ));
            })
            .then((response) => response.json())
            .then((data) => dispatch({
                type: types.SIGN_IN,
                value: data,
                sender,
            }))
            .catch((error) => dispatch(showError(
                {
                    sender,
                    ...(error.message
                        .split('; ')
                        .map((item) => item.split('='))
                        .map((pair) => ({
                            [pair[0]]: pair[1],
                        }))
                        .reduce((acc, curr) => ({ ...acc, ...curr }))
                    ),
                },
                sender,
            )))
            .finally(() => dispatch(hideLoadingHover(sender)));
    };
}

export const signOut = (sender = null) => ({
    type: types.SIGN_OUT,
    sender,
});
