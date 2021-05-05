import * as types from '../constants/ActionTypes';
import * as conf from '../config';

import { showError } from './error';
import { showLoadingHover, hideLoadingHover } from './loading';

import { acceptResponse, parseResponseStr } from '../utility/response';

// eslint-disable-next-line import/prefer-default-export
export function searchMatches(quote, sender = null) {
    return (dispatch) => {
        dispatch(showLoadingHover(sender));

        fetch(`/${conf.api}/movies/quote/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                quote,
            }),
        })
            .then(acceptResponse)
            .then((response) => response.json())
            .then((data) => dispatch({
                type: types.SEARCH_MATCHES,
                value: {
                    quote,
                    matches: data,
                },
                sender,
            }))
            .catch((error) => dispatch(showError(
                {
                    sender,
                    ...parseResponseStr(error.message),
                    data: {
                        quote,
                    },
                },
                sender,
            )))
            .finally(() => dispatch(hideLoadingHover(sender)));
    };
}
