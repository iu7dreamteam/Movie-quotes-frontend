import { connect } from 'react-redux';

import {
    loadUserFromMemory,
    hideError,
} from '../actions';

import App from '../components/App';

function mapStateToProps(state) {
    return {
        isLoading: state.isLoading,
    };
}

function mapDispatchToProps(dispatch) {
    const senderTag = App.name;

    return {
        loadUserFromMemory: () => dispatch(loadUserFromMemory(senderTag)),
        hideError: () => dispatch(hideError(senderTag)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
