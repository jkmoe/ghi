import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { deleteToken } from "../../token";

export default function ClearTokenButton() {
    const clear = () => {
        deleteToken();
        window.location.reload();
    };

    return (
        <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={clear}
        >
            <ExitToAppIcon />
        </IconButton>
    );
}
