import { connect } from 'react-redux';
import History from '../components/History';

import {
    showWatchHistory,
} from '../actions';

function mapStateToProps(state) {
    return {
        user: state.user,
        error: state.error,
        isLoading: state.isLoading,
        watchHistory: state.watchHistory,
        isAuthenticated: state.user.username && state.user.email,
    };
}

function mapDispatchToProps(dispatch) {
    const senderTag = History.name;

    return {
        showWatchHistory: (username) => dispatch(showWatchHistory(username, senderTag)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(History);
