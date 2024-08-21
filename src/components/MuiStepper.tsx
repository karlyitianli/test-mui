import React from 'react'
import { Typography, Divider, Stack, Box, Stepper, Step, StepLabel } from '@mui/material'

const steps = [
    'Step 1',
    'Step 2',
    'Step 3',
];

export const MuiStepper = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Stepper</Typography>
            <Divider />
            <Stack spacing={2}>
                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={1} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            </Stack>
        </div>
    )
}
