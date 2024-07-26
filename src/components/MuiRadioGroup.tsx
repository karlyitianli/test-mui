import React from 'react'
import { Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, Typography, Divider } from '@mui/material';

export const MuiRadioGroup = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Radio Group</Typography>
            <Divider />
            <FormControl>
                <FormLabel id="radio-group-label">Select an option</FormLabel>
                <RadioGroup aria-labelledby="radio-group-label" defaultValue="Stay home">
                    <FormControlLabel value="Stay home" control={<Radio />} label="Stay home" />
                    <FormControlLabel value="Beach" control={<Radio />} label="Beach" />
                    <FormControlLabel value="Not sure" control={<Radio />} label="Not sure" />
                </RadioGroup>
            </FormControl>
        </div>
    )
}
