import {
    deleteCookieItem,
} from './cookies';

export function saveUser(user) {
    window.localStorage.setItem('username', user.username);
    window.localStorage.setItem('email', user.email);
}

export function getUser() {
    return {
        username: window.localStorage.getItem('username'),
        email: window.localStorage.getItem('email'),
    };
}

export function dropUser() {
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('email');
    deleteCookieItem('token');
}
