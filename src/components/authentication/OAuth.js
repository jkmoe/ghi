import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from "@material-ui/core/TextField";
import { setToken } from "../../token";

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: `translateX(-50%)`,
        width: 400,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4, 6),
        textAlign: 'center',
    },
    token: {
        width: '90%',
    }
}));

export default function OAuth() {
    const classes = useStyles();
    const [oAuthToken, setOAuthToken] = useState('');

    const saveToken = (keyCode) => {
        if (keyCode === 13) {
            setToken(oAuthToken);
            window.location.reload();
        }
    };

    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={true}
            >
                <div className={classes.paper}>
                    <h3 id="simple-modal-title">GitHub OAuth Token</h3>
                    <TextField
                        id="filled-password-input"
                        className={classes.token}
                        label="Token"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        onChange={e => setOAuthToken(e.target.value)}
                        onKeyDown={e => saveToken(e.keyCode)}
                    />
                </div>
            </Modal>
        </div>
    );
}
