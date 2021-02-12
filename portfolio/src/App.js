import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

// Import Components
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import Signup from './pages/Signup';

const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/products' exact component={Products} />
                    <Route path='/services' exact component={Services} />
                    <Route path='/sign-up' exact component={Signup} />
                </Switch>
            </Router>
        </>
    )
}

export default App;
