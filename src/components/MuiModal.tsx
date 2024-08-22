import React from 'react'
import { Typography, Divider, Modal, Button, Stack, Box } from '@mui/material'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const MuiModal = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Typography variant="h4" gutterBottom>Modal</Typography>
            <Divider />
            <Stack direction="row" spacing={2}>
                <Button onClick={handleOpen} variant="contained">Open modal</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Why use a modal?
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        If you are creating a modal dialog, you probably want to use the Dialog component rather than directly using Modal. Modal is a lower-level construct that is leveraged by the following components:
                        <li>Dialog</li>
                        <li>Drawer</li>
                        <li>Menu</li>
                        <li>Popover</li>
                        </Typography>
                    </Box>
                </Modal>
            </Stack>
        </div>
    )
}