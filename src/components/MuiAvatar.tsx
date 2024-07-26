import React from 'react'
import { Typography, Divider, Avatar, Stack } from '@mui/material'
import { deepOrange, deepPurple } from '@mui/material/colors';

export const MuiAvatar = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Avatar</Typography>
            <Divider />
            <Stack direction="row" spacing={2}>
                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                <Avatar>H</Avatar>
                <Avatar sx={{ bgcolor: 'green' }}>N</Avatar>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
            </Stack>
        </div>
    )
}