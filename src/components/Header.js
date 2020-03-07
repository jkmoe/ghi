import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import RepositorySearch from "./RepositorySearch";
import OAuth from "./OAuth";
import { getToken } from "../token";
import ClearTokenButton from "./ClearTokenButton";

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
}));

export default function Header() {
    const classes = useStyles();

    const tokenCheck = () => {
        return getToken() ? <></> : <OAuth />;
    };

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                {tokenCheck()}
                <Toolbar>
                    <RepositorySearch />
                    <div className={classes.grow} />
                    <ClearTokenButton />
                </Toolbar>
            </AppBar>
        </div>
    );
}
