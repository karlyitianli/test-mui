import React from 'react'
import { Checkbox, Typography, Divider } from '@mui/material';

export const MuiCheckbox = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Checkbox</Typography>
            <Divider />
            <Checkbox />
            <Checkbox defaultChecked />
            <Checkbox disabled />
            <Checkbox disabled checked />
        </div>
    )
}
