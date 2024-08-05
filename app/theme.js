'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#dc004e',
      },
      background: {
        default: '#f5f5f5',
        paper: '#ffffff',
      },
      text: {
        primary: '#000000',
        secondary: '#777777',
      },
    },
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1920,
        },
      },
    //   typography: {
    //     fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    //     h1: {
    //       fontSize: '2rem',
    //       fontWeight: 500,
    //     },
    //     h2: {
    //       fontSize: '1.5rem',
    //       fontWeight: 500,
    //     },
    //     body1: {
    //       fontSize: '1rem',
    //     },
    //     button: {
    //       textTransform: 'none',
    //     },
    //   },
  });

export default theme;