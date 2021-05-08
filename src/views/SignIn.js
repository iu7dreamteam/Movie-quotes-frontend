import { connect } from 'react-redux';

import SignIn from '../components/SignIn';
import {
    signIn,
} from '../actions';

function mapStateToProps(state) {
    return {
        isAuthenticated: state.user.username && state.user.email,
        error: state.error,
    };
}

function mapDispatchToProps(dispatch) {
    const senderTag = SignIn.name;

    return {
        signIn: (email, password) => dispatch(signIn(email, password, senderTag)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
