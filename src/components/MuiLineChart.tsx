import React from 'react'
import { Typography, Divider, Stack } from '@mui/material'
import { LineChart } from '@mui/x-charts'

export const MuiLineChart = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Line Chart</Typography>
            <Divider />
            <Stack direction="row" spacing={2}>
                <LineChart
                    xAxis={[
                        {
                            id: 'lineCategories',
                            data: ['line A', 'line B', 'line C'],
                            scaleType: 'band',
                        },
                    ]}
                    series={[
                        {
                            data: [2, 5, 3],
                        },
                    ]}
                    width={500}
                    height={300}
                />
            </Stack>
        </div>
    )
}