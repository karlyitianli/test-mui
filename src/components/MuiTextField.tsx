import React from 'react'
import { Typography, Divider, TextField } from '@mui/material'

export const MuiTextField = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Text Field</Typography>
            <Divider />
            <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
            <TextField id="filled-basic" label="Filled" variant="filled"/>
            <TextField id="standard-basic" label="Standard" variant="standard"/>
        </div>
    )
}
