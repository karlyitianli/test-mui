import React from 'react'
import { Select, SelectChangeEvent, MenuItem, FormControl, FormControlLabel, InputLabel, Typography, Divider } from '@mui/material';

export const MuiSelect = () => {
    const [age, setAge] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    }
    return (
        <div>
            <Typography variant="h4" gutterBottom>Select</Typography>
            <Divider />
            <FormControl fullWidth>
                <InputLabel id="simple-select-label">Age</InputLabel>
                <Select
                    labelId="simple-select-label"
                    id="simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}
