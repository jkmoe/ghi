import React from 'react';
import Header from "./Header";
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import NoSearch from "./NoSearch";
import Repository from "./Repository";
import history from "../history";
import Issue from "./Issue";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "../theme";

const App = () => {
    return (
        <Router history={history}>
            <ThemeProvider theme={theme}>
                <Header/>
                <Switch>
                    <Route path="/" exact component={NoSearch}/>
                    <Route path="/repository/:repository" exact component={Repository}/>
                    <Route path="/issue/:id" exact component={Issue}/>
                    <Redirect to="/" />
                </Switch>
            </ThemeProvider>
        </Router>
    );
};

export default App;
