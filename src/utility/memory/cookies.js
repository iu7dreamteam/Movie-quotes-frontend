export function parseCookie() {
    return document.cookie.split('; ').map((item) => {
        const [key, value] = item.split('=');
        return {
            [key]: value,
        };
    }).reduce((accum, cur) => ({ ...accum, ...cur }));
}

export function constructCookie(parsedCookie) {
    return Object.entries(parsedCookie).map((item) => item.join('=')).join('; ');
}

export function deleteCookieItem(itemName) {
    const cookieItems = parseCookie();
    cookieItems[itemName] = '';
    document.cookie = constructCookie(cookieItems);
}
