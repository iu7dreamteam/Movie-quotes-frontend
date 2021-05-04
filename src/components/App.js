import React from 'react';
import {
    BrowserRouter as Router, Route, Switch, useLocation,
} from 'react-router-dom';

import Navbar from '../views/Navbar';
import Homepage from './Homepage';
import Loadingpage from './Loadingpage';
import Signup from './Signup';
import SignIn from '../views/SignIn';
import History from './History';
import NotFound from './NotFound';
import Theater from './Theater';

import '../styles/App.css';

class App extends React.Component {
    componentDidMount() {
        this.props.loadUserFromMemory();
    }

    render() {
        if (this.props.isLoading) {
            return (
                <Loadingpage />
            );
        }

        const SwitchWrapper = (props) => {
            const location = useLocation();

            React.useEffect(() => {
                this.props.hideError();
                console.log(location);
            }, [location]);

            return (
                <Switch>
                    {props.children}
                </Switch>
            );
        };

        return (
            <Router>
                <Navbar />
                <SwitchWrapper>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/theater" component={Theater} />
                    <Route path="/history" component={History} />
                    <Route path="/join" component={Signup} />
                    <Route path="/login" component={SignIn} />
                    <Route component={NotFound} />
                </SwitchWrapper>
            </Router>
        );
    }
}

export default App;
