import React from 'react'
import { Typography, Divider, Stack, Container } from '@mui/material'

export const MuiContainer = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Container</Typography>
            <Divider />
            <Stack spacing={2}>
                <Container 
                sx={{ 
                    bgcolor: 'background.paper',
                    p: 3,
                    borderRadius: 1,
                    border: 1,
                    borderColor: 'grey.500'
                }}
                >
                    <Typography>This is a container with sx</Typography>
                </Container>
            </Stack>
        </div>
    )
}
