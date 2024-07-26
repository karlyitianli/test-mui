import React from 'react'
import { Typography, Divider, Stack } from '@mui/material'

export const MuiDivider = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Divider</Typography>
            <Divider />
            <Stack direction="column" spacing={2}>
                <Divider>Center Or</Divider>
                <Divider textAlign='left'>Left</Divider>
                <Divider textAlign='right'>Right</Divider>
            </Stack>
        </div>
    )
}