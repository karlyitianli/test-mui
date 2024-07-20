import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const lightTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#047957',
        },
    },
    typography: {
        fontFamily: [
            'Untitled Sans',
            '-apple-system',
            'sans-serif',
        ].join(','),
        overline: {
            fontWeight: 500,
        },
    },
    spacing: 4,
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true, // Disable ripple effect for all buttons
                disableElevation: true, // Disable shadow for all buttons
            },
            styleOverrides: {
                contained: {
                    textTransform: 'none',
                    // dropshadow: '0px 2px 0px rgba(0, 0, 0, 0.1)',
                    fontSize: '1rem',
                    borderRadius: '8px',
                    // padding: '8px 12px', // Updated padding
                },
                outlined: {
                    textTransform: 'none',
                    color: 'black',
                    borderColor: '#eee',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    '&:hover': {
                        backgroundColor: '#eee',
                        borderColor: '#eee',
                    },
                    fontSize: '1rem',
                    padding: '8px 12px', // Updated padding
                },
                text: {
                    textTransform: 'none',
                    color: 'black',
                    borderRadius: '8px',
                    '&:hover': {
                        backgroundColor: '#eee',
                    },
                    fontSize: '1rem',
                    padding: '8px 12px', // Updated padding
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    position: 'relative',
                    transform: 'none',
                    // marginBottom: '-8px',
                },
            },
        },
        MuiInput: {
            styleOverrides: {
                underline: {
                    '&:before': {
                        // Underline default state
                        borderBottom: 'none',
                    },
                    '&:hover:not(.Mui-disabled):before': {
                        // Underline hover state
                        borderBottom: 'none',
                    },
                    '&:after': {
                        // Underline focused state
                        borderBottom: 'none',
                    },
                },
                root: {
                    marginTop: '0px',
                }
            },
        },
        MuiInputBase: {
            styleOverrides: {
                label: {
                    marginTop: '0px',
                },
                root: {
                    border: '1px solid #ced4da', // Example border style
                    borderRadius: '8px', // Adjust border radius
                    padding: '8px 12px', // Adjust padding
                    marginTop: '0px',
                    backgroundColor: 'white', // Input background color
                    '&:hover': {
                        borderColor: '#ced4da', // Border color on hover
                    },
                    '&.Mui-focused': {
                        borderColor: '#3f51b5', // Border color when the input is focused
                        boxShadow: '0 0 0 2px rgba(63, 81, 181, 0.2)', // Optional: Add a box-shadow to highlight focus
                    },
                    'label + .MuiInputBase-root': {
                    /* Your custom styles here */
                    /* Example: */
                    marginTop: '0px',
                    color: 'red',
                  },
                },
            },
        },
    },
});

export default lightTheme;
