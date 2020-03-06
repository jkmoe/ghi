import React from 'react';
import Header from "./Header";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NoSearch from "./NoSearch";
import Inspect from "./Inspect";
import Container from "@material-ui/core/Container";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Container>
                    <Switch>
                        <Route path="/" exact component={NoSearch}/>
                        <Route path="/inspect/:repository" exact component={Inspect}/>
                        <Redirect to="/" />
                    </Switch>
                </Container>
            </div>
        </BrowserRouter>
    );
};

export default App;
