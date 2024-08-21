import React from 'react'
import { Typography, Divider, Stack, Box, BottomNavigation, BottomNavigationAction } from '@mui/material'
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const MuiBottomNavigation = () => {
    const [value, setValue] = React.useState(0);

    return (
        <div>
            <Typography variant="h4" gutterBottom>Bottom Navigation</Typography>
            <Divider />
            <Stack spacing={2}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                </BottomNavigation>
            </Stack>
        </div>
    )
}
