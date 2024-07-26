import React from 'react'
import { Typography, Divider, Chip, Stack } from '@mui/material'

export const MuiChip = () => {
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    return (
        <div>
            <Typography variant="h4" gutterBottom>Avatar</Typography>
            <Divider />
            <Stack direction="row" spacing={2}>
                <Chip
                    label="Filled"
                    onClick={handleClick}
                />
                <Chip
                    label="Filled"
                    onClick={handleClick}
                    onDelete={handleDelete}
                />
                <Chip
                    label="Outlined"
                    variant="outlined"
                    onClick={handleClick}
                    onDelete={handleDelete}
                />
            </Stack>
        </div>
    )
}