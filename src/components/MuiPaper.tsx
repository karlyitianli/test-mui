import React from 'react'
import { Typography, Divider, Stack, Paper, Box } from '@mui/material'

export const MuiPaper = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Paper</Typography>
            <Divider />
            <Stack spacing={2}>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: 128,
                            height: 128,
                        },
                    }}
                >
                    <Paper elevation={0} />
                    <Paper variant='elevation'/>
                    <Paper variant='outlined'/>
                    <Paper variant='outlined' square/>
                    <Paper elevation={3} />
                </Box>
            </Stack>
        </div>
    )
}