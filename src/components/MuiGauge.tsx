import React from 'react'
import { Typography, Divider, Stack } from '@mui/material'
import { Gauge } from '@mui/x-charts'

export const MuiGauge = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Gauge</Typography>
            <Divider />
            <Stack direction="row" spacing={2}>
                <Gauge width={100} height={100} value={60} />
                <Gauge width={100} height={100} value={60} startAngle={-90} endAngle={90} />
            </Stack>
        </div>
    )
}