import React from 'react';
import { Drawer, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';

export const MuiSidenav = () => {
    const foundationItems = [
        { text: 'Color', path: '/color' },
        { text: 'Typography', path: '/typography' },
        { text: 'Spacing', path: '/spacing' },
        { text: 'Layout', path: '/layout' },
    ];

    const layoutItems = [
        { text: 'Box', path: '/box' },
        { text: 'Container', path: '/container' },
        { text: 'Grid', path: '/grid' },
        { text: 'Grid v2', path: '/grid-v2' },
        { text: 'Stack', path: '/stack' },
        { text: 'Image List', path: '/image-list' },
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
        { text: 'Icons', path: '/icons' },
        { text: 'Material Icons', path: '/material-icons' },
        { text: 'List', path: '/list' },
        { text: 'Table', path: '/table' },
        { text: 'Tooltip', path: '/tooltip'},
        { text: 'Typography', path: '/type'},
    ];

    const feedbackItems = [
        { text: 'Alert', path: '/alert' },
        { text: 'Backdrop', path: '/backdrop' },
        { text: 'Dialog', path: '/dialog' },
        { text: 'Progress', path: '/progress' },
        { text: 'Skeleton', path: '/skeleton' },
        { text: 'Snackbar', path: '/snackbar' },
    ];

    const utilsItems = [
        { text: 'Utils 1', path: '/utils1' },
        { text: 'Utils 2', path: '/utils2' },
        { text: 'Utils 3', path: '/utils3' },
        { text: 'Utils 4', path: '/utils4' },
        { text: 'Utils 5', path: '/utils5' },
    ];

    const muixItems = [
        { text: 'MUI X 1', path: '/muix1' },
        { text: 'MUI X 2', path: '/muix2' },
        { text: 'MUI X 3', path: '/muix3' },
        { text: 'MUI X 4', path: '/muix4' },
        { text: 'MUI X 5', path: '/muix5' },
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
                    <ListItem button key={index} component="a" href={item.path}>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
            <Typography variant="overline" component="div" sx={{ px: 2, pt: 2 }}>
                Layout
            </Typography>
            <List>
                {layoutItems.map((item, index) => (
                    <ListItem button key={index} component="a" href={item.path}>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
            <Typography variant="overline" component="div" sx={{ px: 2, pt: 2 }}>
                Navigation
            </Typography>
            <List>
                {navigationItems.map((item, index) => (
                    <ListItem button key={index} component="a" href={item.path}>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
            <Typography variant="overline" component="div" sx={{ px: 2, pt: 2 }}>
                Inputs
            </Typography>
            <List>
                {inputItems.map((item, index) => (
                    <ListItem button key={index} component="a" href={item.path}>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
            <Typography variant="overline" component="div" sx={{ px: 2, pt: 2 }}>
                Data
            </Typography>
            <List>
                {dataItems.map((item, index) => (
                    <ListItem button key={index} component="a" href={item.path}>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
            <Typography variant="overline" component="div" sx={{ px: 2, pt: 2 }}>
                Feedback
            </Typography>
            <List>
                {feedbackItems.map((item, index) => (
                    <ListItem button key={index} component="a" href={item.path}>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
            <Typography variant="overline" component="div" sx={{ px: 2, pt: 2 }}>
                Utils
            </Typography>
            <List>
                {utilsItems.map((item, index) => (
                    <ListItem button key={index} component="a" href={item.path}>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
            <Typography variant="overline" component="div" sx={{ px: 2, pt: 2 }}>
                MUI X
            </Typography>
            <List>
                {muixItems.map((item, index) => (
                    <ListItem button key={index} component="a" href={item.path}>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};