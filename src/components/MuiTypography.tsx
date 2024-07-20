import React from 'react'
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';

export const MuiTypography = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Typography</Typography>
            <Divider />
            <Typography variant="h1">
                H1 - 96px
            </Typography>
            <Typography variant="h2">
                H2 - 60px
            </Typography>
            <Typography variant="h3">
                H3 - 48px
            </Typography>
            <Typography variant="h4">
                H4 - 34px
            </Typography>
            <Typography variant="h5">
                H5 - 24px
            </Typography>
            <Typography variant="h6">
                H6 - 20px
            </Typography>
            <Typography variant="subtitle1">
                Subtitle 1 - 16px
            </Typography>
            <Typography variant="subtitle2">
                Subtitle 2 - 14px
            </Typography>
            <Typography variant="body1">
                Body 1 - 16px
            </Typography>
            <Typography variant="body2">
                Body 2 - 14px
            </Typography>
            <Typography variant="button">
                Button - 14px
            </Typography>
            <Typography variant="caption">
                Caption - 12px
            </Typography>
            <Typography variant="overline">
                Overline - 12px
            </Typography>
        </div>

    )
}
