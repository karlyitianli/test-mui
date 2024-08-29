import React from 'react'
import { Typography, Divider, Stack } from '@mui/material'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
];


export const MuiDataGrid = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Data Grid</Typography>
            <Divider />
            <Stack direction="row" spacing={2}>
                <DataGrid rows={rows} columns={columns} />
            </Stack>
        </div>
    )
}