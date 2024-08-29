import React from 'react'
import { Typography, Divider, Stack, Box } from '@mui/material'
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

export const MuiSparkline = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Sparkline</Typography>
            <Divider />
            <Stack direction="row" spacing={2}>
                <Stack direction="row" sx={{ width: '100%' }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <SparkLineChart data={[1, 4, 2, 5, 7, 2, 4, 6]} height={100} />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <SparkLineChart
                            plotType="bar"
                            data={[1, 4, 2, 5, 7, 2, 4, 6]}
                            height={100}
                        />
                    </Box>
                </Stack>
            </Stack>
        </div>
    )
}