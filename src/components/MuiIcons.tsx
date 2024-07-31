import React from 'react'
import { Divider, Typography, Link } from '@mui/material';
import {Delete as DeleteIcon, Close as CloseIcon} from '@mui/icons-material/';

export const MuiIcons = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Material Icons: 2,100+</Typography>
            <Divider />
            <Link href="https://mui.com/material-ui/material-icons/" underline='none'>Material Icons</Link>
            <DeleteIcon />
            <CloseIcon />
        </div>

    )
}
