import React from 'react'
import dayjs from 'dayjs';
import { Typography, Divider, Stack } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DateField } from '@mui/x-date-pickers/DateField';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';

const defaultValue = dayjs();

export const MuiDatePicker = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Date & Time Picker</Typography>
            <Divider />
            <Stack direction="row" spacing={2}>
                <DatePicker label="Basic date picker" defaultValue={defaultValue}/>
                <DateTimePicker label="Basic date time picker" defaultValue={defaultValue}/>
                <DateField label="Basic datefield" defaultValue={defaultValue} />
                <TimeField label="Basic timefield" defaultValue={defaultValue} />
                <DateTimeField label="Basic datetimefield" defaultValue={defaultValue} />
            </Stack>
        </div>
    )
}