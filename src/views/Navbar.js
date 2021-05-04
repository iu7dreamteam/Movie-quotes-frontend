import { connect } from 'react-redux';

import Navbar from '../components/Navbar';

import {
    signOut,
} from '../actions';

function mapStateToProps(state) {
    return {
        isAuthenticated: state.user.username && state.user.email,
        user: state.user,
    };
}

function mapDispatchToProps(dispatch) {
    const senderTag = Navbar.name;

    return {
        signOut: () => dispatch(signOut(senderTag)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
