import React from 'react'
import { Typography, Divider, Rating } from '@mui/material';

export const MuiRating = () => {
  return (
    <div>
        <Typography variant="h4" gutterBottom>Rating</Typography>
        <Divider />
        <Rating name="mui-rating" defaultValue={0} precision={0.5} />
    </div>
  )
}
