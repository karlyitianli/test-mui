import React from 'react'
import { Typography, Divider, Stack } from '@mui/material'
import { PieChart } from '@mui/x-charts'

export const MuiPieChart = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Pie Chart</Typography>
            <Divider />
            <Stack direction="row" spacing={2}>
                <PieChart
                    series={[
                        {
                            data: [
                                { id: 0, value: 10, label: 'series A' },
                                { id: 1, value: 15, label: 'series B' },
                                { id: 2, value: 20, label: 'series C' },
                            ],
                        },
                    ]}
                    width={400}
                    height={200}
                />
            </Stack>
        </div>
    )
}