import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    center: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)'
    },
}));

export default function CenteredScreenInfo(props) {
    const classes = useStyles();
    const { infoText } = props;

    return (
        <div>
            <h3 className={classes.center}>{ infoText }</h3>
        </div>
    );
}
