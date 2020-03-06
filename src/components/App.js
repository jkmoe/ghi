import React from 'react';
import Header from "./Header";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NoSearch from "./NoSearch";
import Inspect from "./Inspect";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" exact component={NoSearch}/>
                    <Route path="/inspect/:repository" exact component={Inspect}/>
                    <Redirect to="/" />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
