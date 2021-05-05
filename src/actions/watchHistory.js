import * as types from '../constants/ActionTypes';
import * as conf from '../config';

import { showError } from './error';

import { acceptResponse, parseResponseStr } from '../utility/response';

export function saveWatchToHistory(watch, username, sender = null) {
    return (dispatch) => {
        fetch(`/${conf.api}/user/${username}/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(watch),
        })
            .then(acceptResponse)
            .then((response) => response.json())
            .then(() => dispatch({
                type: types.SAVE_WATCH_TO_HISTORY,
                sender,
            }))
            .catch((error) => dispatch(showError(
                {
                    sender,
                    ...parseResponseStr(error.message),
                    data: {
                        watch,
                    },
                },
                sender,
            )));
    };
}

export function showWatchHistory(username, sender = null) {
    return (dispatch) => {
        fetch(`/${conf.api}/user/${username}/`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then(acceptResponse)
            .then((response) => response.json())
            .then((data) => dispatch({
                type: types.SHOW_WATCH_HISTORY,
                value: {
                    watches: data,
                },
                sender,
            }))
            .catch((error) => dispatch(showError(
                {
                    sender,
                    ...parseResponseStr(error.message),
                    data: {
                        username,
                    },
                },
                sender,
            )));
    };
}
