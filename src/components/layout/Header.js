import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import RepositorySearch from "../repository/RepositorySearch";
import OAuth from "../authentication/OAuth";
import { getToken } from "../../token";
import ClearTokenButton from "../authentication/ClearTokenButton";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    bar: {
        boxShadow: 'none',
    },
}));

export default function Header() {
    const classes = useStyles();

    const tokenCheck = () => {
        return getToken() ? <></> : <OAuth />;
    };

    return (
        <div className={classes.grow}>
            <AppBar className={classes.bar} position="static">
                {tokenCheck()}
                <Toolbar>
                    <Link href='/'>
                        <img width="80" src="/logo-nav.png" alt="Home"/>
                    </Link>
                    <RepositorySearch />
                    <div className={classes.grow} />
                    <ClearTokenButton />
                </Toolbar>
            </AppBar>
        </div>
    );
}
