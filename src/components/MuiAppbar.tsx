import React from 'react'
import { Typography, Divider, Stack, AppBar, Box, Toolbar, Button, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

export const MuiAppbar = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>App Bar</Typography>
      <Divider />
      <Stack spacing={2}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Header 6
              </Typography>
              <Button variant='outlined' color="inherit">Outlined button</Button>
            </Toolbar>
          </AppBar>
        </Box>
      </Stack>
    </div>
  )
}