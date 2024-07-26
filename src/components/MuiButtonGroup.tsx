import React from 'react'
import { Stack, Button, ButtonGroup, Typography, Divider } from '@mui/material';
import { Padding } from '@mui/icons-material';

export const MuiButtonGroup = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Button Group</Typography>
            <Divider />
            <Stack spacing={4}>
               <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
                </ButtonGroup>
            </Stack>
        </div>
    )
}
