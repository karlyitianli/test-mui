import React from 'react'
import { Typography, Divider, Alert, Stack } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';

export const MuiAlert = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Alerts</Typography>
            <Divider />
            <Stack spacing={2}>
                <Alert severity="error">This is an error alert — check it out!</Alert>
                <Alert severity="warning">This is a warning alert — check it out!</Alert>
                <Alert severity='info'>This is an info alert — check it out!</Alert>
                <Alert icon={<CheckIcon fontSize="inherit" />} severity='success'>This is an info alert — check it out!</Alert>
            </Stack>
        </div>
    )
}