import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages';
import SignIn from './pages/signin';





function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/signin" component={SignIn} />
            </Switch>
        </Router>
    )
}

export default App
