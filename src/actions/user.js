import * as types from '../constants/ActionTypes';
import * as conf from '../config';

import { showError } from './error';
import { showLoadingHover, hideLoadingHover } from './loading';

import { acceptResponse, parseResponseStr } from '../utility/response';

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
            .then(acceptResponse)
            .then((response) => response.json())
            .then((data) => dispatch({
                type: types.SIGN_IN,
                value: data,
                sender,
            }))
            .catch((error) => dispatch(showError(
                {
                    sender,
                    ...parseResponseStr(error.message),
                    data: {
                        email,
                        password,
                    },
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
