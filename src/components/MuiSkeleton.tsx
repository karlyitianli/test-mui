import React from 'react'
import { Typography, Divider, Stack, Skeleton } from '@mui/material'

export const MuiSkeleton = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Skeleton</Typography>
            <Divider />
            <Stack spacing={2}>
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} animation="wave" />
                <Skeleton variant="circular" width={40} height={40} animation="wave" />
                <Skeleton variant="rectangular" width={210} height={60} animation="wave" />
                <Skeleton variant="rounded" width={210} height={60} animation="wave" />
            </Stack>
        </div>
    )
}