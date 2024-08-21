import React from 'react'
import { Typography, Divider, Stack, Button, DialogTitle, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material'

export const MuiDialog = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>Dialog</Typography>
            <Divider />
            <Stack spacing={2}>
                <Button variant="contained" onClick={handleClickOpen}>
                    Open alert dialog
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Use Google's location service?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Let Google help apps determine location. This means sending anonymous
                            location data to Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button variant='outlined' onClick={handleClose}>Disagree</Button>
                        <Button variant='contained' onClick={handleClose} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </Stack>
        </div>
    )
}