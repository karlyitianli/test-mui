import React, { useState } from 'react';
import './App.css';
import './fonts.css';
import lightTheme from './themes/lightTheme';
import { ThemeProvider } from '@mui/material/styles';
import { MuiNavbar } from './components/MuiNavbar';
import Container from '@mui/material/Container';
import { MuiSidenav } from './components/MuiSidenav';
import { Stack, Box } from '@mui/material';
// Foundations
import { MuiColors } from './components/MuiColors';
import { MuiTypography } from './components/MuiTypography';
import { MuiPhosphorIcons } from './components/MuiPhosphorIcons';
// Input components
import { MuiAutocomplete } from './components/MuiAutocomplete';
import { MuiButton } from './components/MuiButton';
import { MuiButtonGroup } from './components/MuiButtonGroup';
import { MuiCheckbox } from './components/MuiCheckbox';
import { MuiFAB } from './components/MuiFAB';
import { MuiRadioGroup } from './components/MuiRadioGroup';
import { MuiRating } from './components/MuiRating';
import { MuiSelect } from './components/MuiSelect';
import { MuiSlider } from './components/MuiSlider';
import { MuiSwitch } from './components/MuiSwitch';
import { MuiTextField } from './components/MuiTextField';
import { MuiToggleButton } from './components/MuiToggleButton';
// Data display components
import { MuiAvatar } from './components/MuiAvatar';
import { MuiBadge } from './components/MuiBadge';
import { MuiChip } from './components/MuiChip';
import { MuiDivider } from './components/MuiDivider';
import { MuiIcons } from './components/MuiIcons';
import { MuiList } from './components/MuiList';
import { MuiTable} from './components/MuiTable';
import { MuiTooltip } from './components/MuiTooltip';
// Feedback components
import { MuiAlert } from './components/MuiAlert';
import { MuiBackdrop } from './components/MuiBackdrop';
import { MuiDialog } from './components/MuiDialog';
import { MuiProgress } from './components/MuiProgress';
import { MuiSkeleton } from './components/MuiSkeleton';
import { MuiSnackbar } from './components/MuiSnackbar';
// Surfaces components
import { MuiAccordion } from './components/MuiAccordion';
import { MuiAppbar } from './components/MuiAppbar';
import { MuiCard } from './components/MuiCard';
import { MuiPaper } from './components/MuiPaper';
// Navigation components
import { MuiBottomNavigation } from './components/MuiBottomNavigation';
import { MuiBreadcrumbs } from './components/MuiBreadcrumbs';
import { MuiDrawer } from './components/MuiDrawer';
import { MuiLink } from './components/MuiLink';
import { MuiMenu } from './components/MuiMenu';
import { MuiPagination } from './components/MuiPagination';
import { MuiSpeedDial } from './components/MuiSpeedDial';
import { MuiStepper } from './components/MuiStepper';
import { MuiTabs } from './components/MuiTabs';
import { MuiBox } from './components/MuiBox';
import { MuiContainer } from './components/MuiContainer';
import { MuiGrid } from './components/MuiGrid';
import { MuiStack } from './components/MuiStack';
import { MuiImageList} from './components/MuiImageList';
// Utils components
import { MuiModal } from './components/MuiModal';
import { MuiPopover } from './components/MuiPopover'
import { MuiPopper } from './components/MuiPopper';
;

function App() {
  //determines which component is active
  const [activeComponent, setActiveComponent] = useState('');

  return (
    // <BrowserRouter>
    <ThemeProvider theme={lightTheme}>
      <div className="App">
        <Stack direction="column" spacing={2}>
          < MuiNavbar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} />
          <Stack direction="row" spacing={2}>
            < MuiSidenav setActiveComponent={setActiveComponent} />
            <Container maxWidth='md' sx={{ padding: '64px 64px 64px 64px' }}>
              {activeComponent === 'Color' && <MuiColors />}
              {activeComponent === 'Typography' && <MuiTypography />}
              {activeComponent === 'Phosphor Icons' && <MuiPhosphorIcons />}
              {activeComponent === 'Autocomplete' && <MuiAutocomplete />}
              {activeComponent === 'Button' && <MuiButton />}
              {activeComponent === 'Button Group' && <MuiButtonGroup />}
              {activeComponent === 'Checkbox' && <MuiCheckbox />}
              {activeComponent === 'Floating Action Button' && <MuiFAB />}
              {activeComponent === 'Radio Group' && <MuiRadioGroup />}
              {activeComponent === 'Rating' && <MuiRating />}
              {activeComponent === 'Select' && <MuiSelect />}
              {activeComponent === 'Slider' && <MuiSlider />}
              {activeComponent === 'Switch' && <MuiSwitch />}
              {activeComponent === 'Text Field' && <MuiTextField />}
              {activeComponent === 'Toggle Button' && <MuiToggleButton />}
              {activeComponent === 'Avatar' && <MuiAvatar />}
              {activeComponent === 'Badge' && <MuiBadge />}
              {activeComponent === 'Chip' && <MuiChip />}
              {activeComponent === 'Divider' && <MuiDivider />}
              {activeComponent === 'Material Icons' && <MuiIcons />}
              {activeComponent === 'List' && <MuiList />}
              {activeComponent === 'Table' && <MuiTable />}
              {activeComponent === 'Tooltip' && <MuiTooltip />}
              {activeComponent === 'Alert' && <MuiAlert />}
              {activeComponent === 'Backdrop' && <MuiBackdrop />}
              {activeComponent === 'Dialog' && <MuiDialog />}
              {activeComponent === 'Progress' && <MuiProgress />}
              {activeComponent === 'Skeleton' && <MuiSkeleton />}
              {activeComponent === 'Snackbar' && <MuiSnackbar />}
              {activeComponent === 'Accordion' && <MuiAccordion />}
              {activeComponent === 'App Bar' && <MuiAppbar />}
              {activeComponent === 'Card' && <MuiCard />}
              {activeComponent === 'Paper' && <MuiPaper />}
              {activeComponent === 'Bottom Navigation' && <MuiBottomNavigation />}
              {activeComponent === 'Breadcrumbs' && <MuiBreadcrumbs />}
              {activeComponent === 'Drawer' && <MuiDrawer />}
              {activeComponent === 'Link' && <MuiLink />}
              {activeComponent === 'Menu' && <MuiMenu />}
              {activeComponent === 'Pagination' && <MuiPagination />}
              {activeComponent === 'Speed Dial' && <MuiSpeedDial />}
              {activeComponent === 'Stepper' && <MuiStepper />}
              {activeComponent === 'Tabs' && <MuiTabs />}
              {activeComponent === 'Box' && <MuiBox />}
              {activeComponent === 'Container' && <MuiContainer />}
              {activeComponent === 'Grid' && <MuiGrid />}
              {activeComponent === 'Stack' && <MuiStack />}
              {activeComponent === 'Image List' && <MuiImageList />}
              {activeComponent === 'Modal' && <MuiModal />}
              {activeComponent === 'Popover' && <MuiPopover />}
              {activeComponent === 'Popper' && <MuiPopper />}
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