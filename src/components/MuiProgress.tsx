import React from 'react'
import { Typography, Divider, Stack, CircularProgress, LinearProgress } from '@mui/material'

export const MuiProgress = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Progress</Typography>
            <Divider />
            <Stack spacing={2}>
                <CircularProgress color="secondary" />
                <CircularProgress color="success" />
                <CircularProgress color="inherit" />
                <LinearProgress />
                <LinearProgress color="secondary" />
                <LinearProgress color="success" />
                <LinearProgress color="inherit" />
            </Stack>
        </div>
    )
}