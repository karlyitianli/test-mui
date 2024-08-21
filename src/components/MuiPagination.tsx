import React from 'react'
import { Typography, Divider, Stack, Pagination } from '@mui/material'

export const MuiPagination = () => {


    return (
        <div>
            <Typography variant="h4" gutterBottom>Pagination</Typography>
            <Divider />
            <Stack spacing={2}>
                <Pagination count={10} />
                <Pagination count={10} disabled />
                <Pagination count={10} color="primary" />
                <Pagination count={10} color="secondary" />
            </Stack>
        </div>
    )
}
