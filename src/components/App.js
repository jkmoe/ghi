import React from 'react';
import Header from "./layout/Header";
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from "./Home";
import Repository from "./repository/Repository";
import history from "../history";
import Issue from "./issue/Issue";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "../theme";

const App = () => {
    return (
        <Router history={history}>
            <ThemeProvider theme={theme}>
                <Header/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/repository/:repository" exact component={Repository}/>
                    <Route path="/issue/:id" exact component={Issue}/>
                    <Redirect to="/" />
                </Switch>
            </ThemeProvider>
        </Router>
    );
};

export default App;
