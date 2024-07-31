import React from 'react'
import { Divider, Typography, Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export const MuiTooltip = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Tooltip</Typography>
            <Divider />
            <Tooltip title="Delete" arrow>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        </div>

    )
}
