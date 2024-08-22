import React from 'react'
import { Typography, Divider, Popover, Button, Stack, Box } from '@mui/material'

export const MuiPopover = () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <div>
            <Typography variant="h4" gutterBottom>Popover</Typography>
            <Divider />
            <Stack direction="row" spacing={2}>
                <Button variant="contained" aria-describedby={id} type="button" onClick={handleClick}>
                    Open Popover
                </Button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <Typography sx={{ p: 2 }}>The content of the Popover. Use Popovers for simple, tied-to-element overlays with built-in features like: focus management, accessibility and closes when clicking outside of the popover.</Typography>
                </Popover>
            </Stack>
        </div>
    )
}