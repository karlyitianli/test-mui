import React from 'react'
import { Typography, Divider, Stack, Breadcrumbs, Link } from '@mui/material'


export const MuiBreadcrumbs = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Breadcrumbs</Typography>
            <Divider />
            <Stack spacing={2}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        MUI Core
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        Navigation
                    </Link>
                    <Typography color="text.primary">Breadcrumbs</Typography>
                </Breadcrumbs>
                <Breadcrumbs aria-label="breadcrumb" separator="›">
                    <Link underline="hover" color="inherit" href="/">
                        MUI Core
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        Navigation
                    </Link>
                    <Typography color="text.primary">Breadcrumbs</Typography>
                </Breadcrumbs>
            </Stack>
        </div>
    )
}
