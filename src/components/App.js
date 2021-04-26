import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Signup from './Signup';
import SignIn from './SignIn';

import '../styles/App.css';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Switch>
                        <Route execat to="/join" component={Signup} />
                        <Route execat to="/login" component={SignIn} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
