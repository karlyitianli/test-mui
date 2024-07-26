import React from 'react'
import { Typography, Divider, Switch } from '@mui/material'

export const MuiSwitch = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Switch</Typography>
            <Divider />
            <Switch />
            <Switch defaultChecked />
            <Switch disabled />
            <Switch disabled defaultChecked />
        </div>
    )
}
