import React from 'react';
import {
    BrowserRouter as Router, Route, Switch,
    useHistory,
} from 'react-router-dom';

import Navbar from '../views/Navbar';
import Homepage from './Homepage';
import Loadingpage from './Loadingpage';
import SignUp from '../views/SignUp';
import SignIn from '../views/SignIn';
import History from '../views/History';
import NotFound from './NotFound';
import Theater from '../views/Theater';

import '../styles/App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.props.loadUserFromMemory();
    }

    render() {
        const SwitchWrapper = (props) => {
            const history = useHistory();

            React.useEffect(() => {
                const unlisten = history.listen(this.props.hideError);
                return unlisten;
            }, []);

            return (
                <Switch className={props.className}>
                    {props.children}
                </Switch>
            );
        };

        return (
            <Router>
                <Loadingpage className={`loading-cover ${this.props.isLoading ? 'visible' : 'hidden'}`} />
                <div className={this.props.isLoading ? 'hidden' : 'visible'}>
                    <Navbar />
                    <SwitchWrapper>
                        <Route exact path="/" component={Homepage} />
                        <Route path="/theater" component={Theater} />
                        <Route path="/history" component={History} />
                        <Route path="/join" component={SignUp} />
                        <Route path="/login" component={SignIn} />
                        <Route component={NotFound} />
                    </SwitchWrapper>
                </div>
            </Router>
        );
    }
}

export default App;
