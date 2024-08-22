import React from 'react'
import { Typography, Divider, Stack } from '@mui/material'

export const MuiStack = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Stack</Typography>
            <Divider />
            <Stack spacing={2} sx={{
                border: 1,
                borderColor: 'grey.500',
                p: 3,
            }}>
                <Typography>This is a stack</Typography>
            </Stack>
        </div >
    )
}
