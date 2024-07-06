import React from 'react';
import './App.css';
import './fonts.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
// import { MuiTypography } from './components/MuiTypography';
import { MuiButton } from './components/MuiButton';
import { MuiNavbar } from './components/MuiNavbar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        < MuiNavbar />
        < MuiButton />
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
  );
}

export default App;