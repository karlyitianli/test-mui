import React from 'react'
import { Typography, Divider, Popper, Button, Stack, Box } from '@mui/material'

export const MuiPopper = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <div>
            <Typography variant="h4" gutterBottom>Popper</Typography>
            <Divider />
            <Stack direction="row" spacing={2}>
                <Button variant="contained" aria-describedby={id} type="button" onClick={handleClick}>
                    Toggle Popper
                </Button>
                <Popper id={id} open={open} anchorEl={anchorEl}>
                    <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                    Popover: For simple, tied-to-element overlays with built-in features.
                    <br />
                    Popper: For advanced, flexible positioning without additional UI logic.
                    </Box>
                </Popper>
            </Stack>
        </div>
    )
}