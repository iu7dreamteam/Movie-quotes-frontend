import { combineReducers } from 'redux';
import user from './user';
import error from './error';
import isLoading from './isLoading';
import searchResult from './searchResult';
import watchHistory from './watchHistory';

export default combineReducers({
    user,
    error,
    isLoading,
    searchResult,
    watchHistory,
});
