import React from 'react'
import { Typography, Divider, Badge, Stack } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

export const MuiBadge = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Avatar</Typography>
            <Divider />
            <Stack direction="row" spacing={2}>
                <Badge badgeContent={4} color="primary" />
                <Badge badgeContent={4} color="error">
                    <MailIcon />
                </Badge>
            </Stack>
        </div>
    )
}