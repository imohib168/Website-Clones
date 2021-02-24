import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components';

import Home from './pages/Home/Home';

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
