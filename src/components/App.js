import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Homepage from './Homepage';
import Signup from './Signup';
import SignIn from './SignIn';
import History from './History';

import '../styles/App.css';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/history" component={History} />
                    <Route path="/join" component={Signup} />
                    <Route path="/login" component={SignIn} />
                    <Route component={() => <h1>Не найдено</h1>} />
                </Switch>
            </Router>
        );
    }
}

export default App;
