import React from 'react'
import { Typography, Divider, Stack, Box, Link } from '@mui/material'

// const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

export const MuiLink = () => {

    return (
        <div>
            <Typography variant="h4" gutterBottom>Link</Typography>
            <Divider />
            <Stack spacing={2}>
                <Box
                    sx={{
                        typography: 'body1',
                        '& > :not(style) ~ :not(style)': {
                            ml: 2,
                        },
                    }}
                    // onClick={preventDefault}
                >
                    <Link href="https://www.google.com/" target="_blank">Google</Link>
                    <Link href="#" color="inherit">
                        {'color="inherit"'}
                    </Link>
                    <Link href="#" variant="body2">
                        {'variant="body2"'}
                    </Link>
                    <Link href="#" underline="none">
                        {'underline="none"'}
                    </Link>
                    <Link href="#" underline="hover">
                        {'underline="hover"'}
                    </Link>
                    <Link href="#" underline="always">
                        {'underline="always"'}
                    </Link>
                </Box>
            </Stack>
        </div>
    )
}
