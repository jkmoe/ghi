import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import RepositorySearch from "./RepositorySearch";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <RepositorySearch />
                </Toolbar>
            </AppBar>
        </div>
    );
}
