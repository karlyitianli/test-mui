import React from 'react'
import { Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material'
import { Inbox, Drafts, Delete } from '@mui/icons-material'

export const MuiList = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>List</Typography>
            <Divider />
            <Stack direction="column" spacing={2}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Inbox />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Drafts />
                            </ListItemIcon>
                            <ListItemText primary="Drafts" />
                        </ListItemButton>
                    </ListItem>
                    <Divider/>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Delete />
                            </ListItemIcon>
                            <ListItemText primary="Trash" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Spam" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Stack>
        </div>
    )
}