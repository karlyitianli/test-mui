import React from 'react'
import { Typography, Divider, Stack, Snackbar, Button, SnackbarCloseReason } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export const MuiSnackbar = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <Button color="success" size="small" onClick={handleClose}>
                Undo
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );
    return (
        <div>
            <Typography variant="h4" gutterBottom>Skeleton</Typography>
            <Divider />
            <Stack spacing={2}>
                <Button onClick={handleClick} variant='contained'>Open Snackbar</Button>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="Note archived"
                    action={action}
                />
            </Stack>
        </div>
    )
}