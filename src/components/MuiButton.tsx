import React from 'react'
import { Stack, Button, Typography, Divider } from '@mui/material';

export const MuiButton = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Button</Typography>
            <Divider />
            <Stack spacing={4}>
                <Stack spacing={2} direction="row">
                    <Button variant="text"> Text </Button>
                    <Button variant="outlined"> Outlined </Button>
                    <Button variant="contained" disableElevation> Contained </Button>
                </Stack>
                <Stack spacing={2} direction="row">
                    <Button variant="contained" color="primary">Primary</Button>
                    <Button variant="contained" color="secondary">Secondary</Button>
                    <Button variant="contained" color="error">Error</Button>
                    <Button variant="contained" color="info">Info</Button>
                    <Button variant="contained" color="success">Success</Button>
                </Stack>
                <Stack display='block' spacing={2} direction='row'>
                    <Button variant="contained" size='small'>Small</Button>
                    <Button variant="contained" size='medium'>Medium</Button>
                    <Button variant="contained" size='large'>Large</Button>
                </Stack>
            </Stack>
        </div>
    )
}
