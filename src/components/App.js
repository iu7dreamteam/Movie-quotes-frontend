import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Navbar from './Navbar';

import '../styles/App.css';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Switch />
                </div>
            </Router>
        );
    }
}

export default App;
