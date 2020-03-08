import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    snack: {
        bottom: '50%',
        transform: 'translate(-50%, 50%)',
    },
    alert: {
        boxShadow: 'none',
    },
}));

export default function CustomizedSnackbars(props) {
    const classes = useStyles();
    const open = props.open;

    return (
        <div className={classes.root}>
            <Snackbar className={classes.snack} open={open}>
                <Alert className={classes.alert} severity="error">
                    Please stick to the search pattern user/repository!
                </Alert>
            </Snackbar>
        </div>
    );
}
