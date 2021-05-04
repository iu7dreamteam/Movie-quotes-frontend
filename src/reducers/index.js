import { combineReducers } from 'redux';
import user from './user';
import error from './error';
import isLoading from './isLoading';

export default combineReducers({
    user,
    error,
    isLoading,
});
