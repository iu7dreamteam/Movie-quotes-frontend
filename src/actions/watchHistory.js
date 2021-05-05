import * as types from '../constants/ActionTypes';
import * as conf from '../config';

import { showError } from './error';

import { acceptResponse, parseResponseStr } from '../utility/response';

// eslint-disable-next-line import/prefer-default-export
export function saveWatchToHistory(watch, username, sender = null) {
    return (dispatch) => {
        fetch(`/${conf.api}/user/quote/`, {
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
