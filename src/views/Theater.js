import { connect } from 'react-redux';
import Theater from '../components/Theater';

import {
    searchMatches,
} from '../actions';

function mapStateToProps(state) {
    return {
        error: state.error,
        isLoading: state.isLoading,
        searchResult: state.searchResult,
    };
}

function mapDispatchToProps(dispatch) {
    const senderTag = Theater.name;

    return {
        searchMatches: (quote) => dispatch(searchMatches(quote, senderTag)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Theater);
