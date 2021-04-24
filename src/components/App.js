import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import "../styles/App.css";

class App extends React.Component {
    render () {
        return (
            <Router>
                <div>
                    <h1>Movie quotes</h1>
                    <Switch>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
