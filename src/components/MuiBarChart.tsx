import React from 'react'
import { Typography, Divider, Stack } from '@mui/material'
import { BarChart } from '@mui/x-charts/BarChart';

export const MuiBarChart = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Bar Chart</Typography>
            <Divider />
            <Stack direction="row" spacing={2}>
                <BarChart
                    xAxis={[
                        {
                            id: 'barCategories',
                            data: ['bar A', 'bar B', 'bar C'],
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