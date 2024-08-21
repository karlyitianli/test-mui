import React from 'react'
import { Typography, Divider, Stack, Box } from '@mui/material'

export const MuiBox = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Box</Typography>
            <Divider />
            <Stack spacing={2}>
                <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
                    This Box renders as an HTML section element.
                </Box>
                <Box
                    height={200}
                    width={200}
                    my={4}
                    display="flex"
                    alignItems="center"
                    gap={4}
                    p={2}
                    sx={{ border: '2px solid grey' }}
                >
                    This Box uses MUI System props for quick customization.
                </Box>
                <Box
                    sx={{
                        width: 100,
                        height: 100,
                        borderRadius: 1,
                        bgcolor: 'primary.main',
                        '&:hover': {
                            bgcolor: 'primary.dark',
                        },
                    }}
                />
            </Stack>
        </div>
    )
}
