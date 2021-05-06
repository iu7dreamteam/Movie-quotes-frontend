import { connect } from 'react-redux';

import SignUp from '../components/SignUp';
import {
    signUp,
} from '../actions';

function mapStateToProps(state) {
    return {
        isAuthenticated: state.user.username && state.user.email,
        error: state.error,
    };
}

function mapDispatchToProps(dispatch) {
    const senderTag = SignUp.name;

    return {
        signUp: (username, email, password, repeatedPassword) => dispatch(
            signUp(username, email, password, repeatedPassword, senderTag),
        ),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
