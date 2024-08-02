import React from 'react';
import { Drawer, List, ListItem, ListItemText, Toolbar, Typography, Divider } from '@mui/material';

// Add a prop type for setActiveComponent
interface MuiSidenavProps {
    setActiveComponent: (componentName: string) => void;
}

export const MuiSidenav: React.FC<MuiSidenavProps> = ({ setActiveComponent }) => {
    const foundationItems = [
        { text: 'Color', path: '/color' },
        { text: 'Typography', path: '/typography' },
        { text: 'Spacing', path: '/spacing' },
        { text: 'Radius', path: '/radius' },
        { text: 'Shadows', path: '/shadows' },
        { text: 'Phosphor Icons', path: '/phosphor-icons' },
    ];

    const inputItems = [
        { text: 'Autocomplete', path: '/autocomplete' },
        { text: 'Button', path: '/button' },
        { text: 'Button Group', path: '/button-group' },
        { text: 'Checkbox', path: '/checkbox' },
        { text: 'Floating Action Button', path: '/floating-action-button' },
        { text: 'Radio Group', path: '/radio-group' },
        { text: 'Rating', path: '/rating' },
        { text: 'Select', path: '/select' },
        { text: 'Slider', path: '/slider' },
        { text: 'Switch', path: '/switch' },
        { text: 'Text Field', path: '/text-field' },
        { text: 'Toggle Button', path: '/toggle-button' },
    ];

    const dataItems = [
        { text: 'Avatar', path: '/avatar' },
        { text: 'Badge', path: '/badge' },
        { text: 'Chip', path: '/chip' },
        { text: 'Divider', path: '/divider' },
        { text: 'Material Icons', path: '/material-icons' },
        { text: 'List', path: '/list' },
        { text: 'Table', path: '/table' },
        { text: 'Tooltip', path: '/tooltip' },
        { text: 'Typography', path: '/type' },
    ];

    const feedbackItems = [
        { text: 'Alert', path: '/alert' },
        { text: 'Backdrop', path: '/backdrop' },
        { text: 'Dialog', path: '/dialog' },
        { text: 'Progress', path: '/progress' },
        { text: 'Skeleton', path: '/skeleton' },
        { text: 'Snackbar', path: '/snackbar' },
    ];

    const surfaceItems = [
        { text: 'Accordion', path: '/accordion' },
        { text: 'App Bar', path: '/app-bar' },
        { text: 'Card', path: '/card' },
        { text: 'Paper', path: '/paper' },
    ];

    const navigationItems = [
        { text: 'Bottom Navigation', path: '/bottom-navigation' },
        { text: 'Breadcrumbs', path: '/breadcrumbs' },
        { text: 'Drawer', path: '/drawer' },
        { text: 'Link', path: '/link' },
        { text: 'Menu', path: '/menu' },
        { text: 'Pagination', path: '/pagination' },
        { text: 'Speed Dial', path: '/speed-dial' },
        { text: 'Stepper', path: '/stepper' },
        { text: 'Tabs', path: '/tabs' },
    ];

    const layoutItems = [
        { text: 'Box', path: '/box' },
        { text: 'Container', path: '/container' },
        { text: 'Grid', path: '/grid' },
        { text: 'Grid v2', path: '/grid-v2' },
        { text: 'Stack', path: '/stack' },
        { text: 'Image List', path: '/image-list' },
    ];

    const utilsItems = [
        { text: 'Click-Away Listener', path: '/click-away-listener' },
        { text: 'CSS Baseline', path: '/css-baseline' },
        { text: 'Modal', path: '/modal' },
        { text: 'No SSR', path: '/no-ssr' },
        { text: 'Popover', path: '/popover' },
        { text: 'Popper', path: '/popper' },
        { text: 'Portal', path: '/portal' },
        { text: 'Textarea Autosize', path: '/textarea-autosize' },
        { text: 'Transitions', path: '/transitions' },
        { text: 'Use Media Query', path: '/use-media-query' },
    ];

    const muixItems = [
        { text: 'Data Grid', path: '/data-grid' },
        { text: 'Date & Time Pickers', path: '/date-time-pickers' },
        { text: 'Charts', path: '/charts' },
        { text: 'Tree View', path: '/tree-view' },
    ];

    return (
        <Drawer
            variant="permanent"
            sx={{
                position: 'sticky',
                width: 240,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Typography variant="overline" component="div" sx={{ px: 2, pt: 2 }}>
                Foundation
            </Typography>
            <List>
                {foundationItems.map((item, index) => (
                    //removed these props: component="a" href={item.path} 
                    <ListItem button key={index} onClick={() => setActiveComponent(item.text)}>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <Typography variant="overline" component="div" sx={{ px: 2, pt: 2 }}>
                Inputs
            </Typography>
            <List>
                {inputItems.map((item, index) => (
                    <ListItem button key={index} onClick={() => setActiveComponent(item.text)}>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <Typography variant="overline" component="div" sx={{ px: 2, pt: 2 }}>
                Data Display
            </Typography>
            <List>
                {dataItems.map((item, index) => (
                    <ListItem button key={index} onClick={() => setActiveComponent(item.text)}>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <Typography variant="overline" component="div" sx={{ px: 2, pt: 2 }}>
                Feedback
            </Typography>
            <List>
                {feedbackItems.map((item, index) => (
                    <ListItem button key={index} onClick={() => setActiveComponent(item.text)}>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <Typography variant="overline" component="div" sx={{ px: 2, pt: 2 }}>
                Surfaces
            </Typography>
            <List>
                {surfaceItems.map((item, index) => (
                    <ListItem button key={index} onClick={() => setActiveComponent(item.text)}>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <Typography variant="overline" component="div" sx={{ px: 2, pt: 2 }}>
                Navigation
            </Typography>
            <List>
                {navigationItems.map((item, index) => (
                    <ListItem button key={index} onClick={() => setActiveComponent(item.text)}>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <Typography variant="overline" component="div" sx={{ px: 2, pt: 2 }}>
                Layout
            </Typography>
            <List>
                {layoutItems.map((item, index) => (
                    <ListItem button key={index} onClick={() => setActiveComponent(item.text)}>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <Typography variant="overline" component="div" sx={{ px: 2, pt: 2 }}>
                Utils
            </Typography>
            <List>
                {utilsItems.map((item, index) => (
                    <ListItem button key={index} onClick={() => setActiveComponent(item.text)}>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <Typography variant="overline" component="div" sx={{ px: 2, pt: 2 }}>
                MUI X
            </Typography>
            <List>
                {muixItems.map((item, index) => (
                    <ListItem button key={index} onClick={() => setActiveComponent(item.text)}>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};