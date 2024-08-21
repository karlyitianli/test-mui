import React from 'react'
import { Typography, Divider, Stack, Drawer, Button, Box } from '@mui/material'


export const MuiDrawer = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        </Box>
    );
    return (
        <div>
            <Typography variant="h4" gutterBottom>Drawer</Typography>
            <Divider />
            <Stack spacing={2}>
                <Button variant="contained" onClick={toggleDrawer(true)}>Open drawer</Button>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    {DrawerList}
                </Drawer>
            </Stack>
        </div>
    )
}
