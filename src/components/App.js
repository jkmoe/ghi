import React from 'react';
import Header from "./Header";
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import NoSearch from "./NoSearch";
import Inspect from "./Inspect";
import history from "../history";

const App = () => {
    return (
        <Router history={history}>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" exact component={NoSearch}/>
                    <Route path="/inspect/:repository" exact component={Inspect}/>
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
