import React from 'react'
import { Typography, Divider, Slider } from '@mui/material'

export const MuiSlider = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Slider</Typography>
            <Divider />
            <Slider defaultValue={9} aria-label="default-slider" />
        </div>
    )
}
