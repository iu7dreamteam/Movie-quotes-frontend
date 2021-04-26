import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Homepage from './Homepage';
import Loadingpage from './Loadingpage';
import Signup from './Signup';
import SignIn from './SignIn';
import History from './History';
import NotFound from './NotFound';
import Theater from './Theater';

import '../styles/App.css';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/theater" component={Theater} />
                    <Route exact path="/" component={Homepage} />
                    <Route path="/history" component={History} />
                    <Route path="/join" component={Signup} />
                    <Route path="/login" component={SignIn} />
                    <Route path="/loading" component={Loadingpage} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

export default App;
