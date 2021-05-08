import { connect } from 'react-redux';
import Theater from '../components/Theater';

import {
    searchMatches,
    saveWatchToHistory,
} from '../actions';

function mapStateToProps(state) {
    return {
        user: state.user,
        error: state.error,
        isLoading: state.isLoading,
        searchResult: state.searchResult,
        watchHistory: state.watchHistory,
        isAuthenticated: state.user.username && state.user.email,
    };
}

function mapDispatchToProps(dispatch) {
    const senderTag = Theater.name;

    return {
        searchMatches: (quote) => dispatch(searchMatches(quote, senderTag)),
        saveWatchToHistory: (watch, username) => dispatch(
            saveWatchToHistory(watch, username, senderTag),
        ),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Theater);
