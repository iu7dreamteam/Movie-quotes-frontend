export function responseToStr(response) {
    return `status=${response.status}; message=${response.statusText}`;
}

export function parseResponseStr(responseStr) {
    return responseStr
        .split('; ')
        .map((item) => item.split('='))
        .map((pair) => ({
            [pair[0]]: pair[1],
        }))
        .reduce((acc, curr) => ({ ...acc, ...curr }));
}

export function acceptResponse(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    return Promise.reject(new Error(responseToStr(response)));
}
