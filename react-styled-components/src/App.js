import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';

import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Services from './pages/Services/Services';
import Signup from './pages/Signup/Signup';

import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <Router>
            <GlobalStyle />
            <ScrollToTop />
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/sign-up" component={Signup} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
