import React from 'react'
import { Fab, Typography, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const MuiFAB = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Floating Action Button</Typography>
            <Divider />
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </div>
    )
}
