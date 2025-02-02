import React from 'react';
import SnackBar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import useStyles from './styles';

const CustomizedSnackBar = ({ open, setOpen }) => {

    const classes = useStyles();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    }

    return (
        <div className={classes.root}>
            <SnackBar
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <MuiAlert onClose={handleClose} severity="success" elevation={6} variant="filled">
                    Transaction Successfully Created.
                </MuiAlert>
            </SnackBar>
        </div>
    )
}

export default CustomizedSnackBar;
