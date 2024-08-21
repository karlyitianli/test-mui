import React from 'react'
import { Typography, Divider, Backdrop, Stack, CircularProgress, Button } from '@mui/material'

export const MuiBackdrop = () => {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <div>
            <Typography variant="h4" gutterBottom>Backdrop</Typography>
            <Divider />
            <Stack spacing={2}>
                <Button variant="contained" onClick={handleOpen}>Show backdrop</Button>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                    onClick={handleClose}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </Stack>
        </div>
    )
}