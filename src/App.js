import React, { useState } from 'react';
import './App.css';
import './fonts.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/lightTheme';
import { MuiColors } from './components/MuiColors';
import { MuiButton } from './components/MuiButton';
import { MuiNavbar } from './components/MuiNavbar';
import Container from '@mui/material/Container';
import { MuiSidenav } from './components/MuiSidenav';
import { Stack, Box } from '@mui/material';
import { MuiTypography } from './components/MuiTypography';

function App() {
  //determines which component is active
  const [activeComponent, setActiveComponent] = useState('');

  return (
    // <BrowserRouter>
    <ThemeProvider theme={theme}>
      <div className="App">
        <Stack direction="column" spacing={2}>
          < MuiNavbar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} />
          <Stack direction="row" spacing={2}>
            < MuiSidenav setActiveComponent={setActiveComponent} />
            <Container maxWidth='sm' sx={{ padding: '64px 64px 64px 64px' }}>
              {activeComponent === 'Color' && <MuiColors />}
              {activeComponent === 'Typography' && <MuiTypography />}
              {activeComponent === 'Button' && <MuiButton />}
            </Container>
          </Stack>

        </Stack>
        {/* <MuiTypography /> */}
        {/* <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs>
                <Tab label="Typography"/>
                <Tab label="Item Two"/>
                <Tab label="Item Three"/>
              </Tabs>
            </Box>
          </Box>
          <Button variant="text" style={{ textTransform: 'none' }}>text</Button>
          <Button variant="contained" style={{ textTransform: 'none' }}>Contained</Button>
          <Button variant="outlined" style={{ textTransform: 'none' }}>Outlined</Button>
          <TextField id="standard-basic" label="Standard" variant="standard" /> */}
      </div>
    </ThemeProvider>
    // </BrowserRouter>
  );
}

export default App;