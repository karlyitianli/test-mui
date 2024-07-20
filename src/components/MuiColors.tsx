import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Divider } from '@mui/material';
import lightTheme from '../themes/lightTheme';

// Example color palette
const colors = [
    { name: 'Black', value: lightTheme.palette.common.black },
    { name: 'White', value: lightTheme.palette.common.white },
    { name: 'Primary main', value: lightTheme.palette.primary.main },
    { name: 'Primary light', value: lightTheme.palette.primary.light },
    { name: 'Primary dark', value: lightTheme.palette.primary.dark },
    { name: 'Secondary main', value: lightTheme.palette.secondary.main },
    { name: 'Secondary light', value: lightTheme.palette.secondary.light },
    { name: 'Secondary dark', value: lightTheme.palette.secondary.dark },
    { name: 'Error main', value: lightTheme.palette.error.main },
    { name: 'Error light', value: lightTheme.palette.error.light },
    { name: 'Error dark', value: lightTheme.palette.error.dark },
    { name: 'Info main', value: lightTheme.palette.info.main },
    { name: 'Info light', value: lightTheme.palette.info.light },
    { name: 'Info dark', value: lightTheme.palette.info.dark },
    { name: 'Success main', value: lightTheme.palette.success.main },
    { name: 'Success light', value: lightTheme.palette.success.light },
    { name: 'Success dark', value: lightTheme.palette.success.dark },
    { name: 'Warning main', value: lightTheme.palette.warning.main },
    { name: 'Warning light', value: lightTheme.palette.warning.light },
    { name: 'Warning dark', value: lightTheme.palette.warning.dark },
    { name: 'Grey 50', value: lightTheme.palette.grey[50] },
    { name: 'Grey 100', value: lightTheme.palette.grey[100] },
    { name: 'Grey 200', value: lightTheme.palette.grey[200] },
    { name: 'Grey 300', value: lightTheme.palette.grey[300] },
    { name: 'Grey 400', value: lightTheme.palette.grey[400] },
    { name: 'Grey 500', value: lightTheme.palette.grey[500] },
    { name: 'Grey 600', value: lightTheme.palette.grey[600] },
    { name: 'Grey 700', value: lightTheme.palette.grey[700] },
    { name: 'Grey 800', value: lightTheme.palette.grey[800] },
    { name: 'Grey 900', value: lightTheme.palette.grey[900] },
    { name: 'Grey A100', value: lightTheme.palette.grey.A100 },
    { name: 'Grey A200', value: lightTheme.palette.grey.A200 },
    { name: 'Grey A400', value: lightTheme.palette.grey.A400 },
    { name: 'Grey A700', value: lightTheme.palette.grey.A700 },
];

export const MuiColors = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Color: Light mode</Typography>
            <Divider />
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Color Name</TableCell>
                            <TableCell>Color Value</TableCell>
                            <TableCell>Sample</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {colors.map((color) => (
                            <TableRow key={color.name}>
                                <TableCell>{color.name}</TableCell>
                                <TableCell>{color.value}</TableCell>
                                <TableCell>
                                    <div style={{ backgroundColor: color.value, width: '50px', height: '20px' }}></div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MuiColors;