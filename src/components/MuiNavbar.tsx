import React from 'react'
import { AppBar, Stack, IconButton, Toolbar, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import { MuiSearch } from './MuiSearch';

export const MuiNavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Stack direction='row' alignItems='center' justifyContent='space-between' width='100%'>
          <Stack direction='row' alignItems='center'>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
              MUI Component Themer
            </Typography>
          </Stack>
          <Stack direction='row' alignItems='center'>
            <MuiSearch />
            <IconButton>
              <Avatar alt='Remy Sharp' src='https://mui.com/static/images/avatar/1.jpg' />
            </IconButton>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar >
  )
}
