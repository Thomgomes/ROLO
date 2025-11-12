import { createTheme } from '@mui/material';
import palette from './palette';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxl: true;
  }
}

const theme = createTheme({
  palette,
  typography: {
    fontFamily: '"Sora", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 'bold',
      fontSize: '36px',
    },
    h2: {
      fontWeight: 'bold',
      fontSize: '38px',
    },
    h3: {
      fontWeight: 'bold',
      fontSize: '20px',
    },
    subtitle1: {
      fontWeight: '600',
      fontSize: '18px',
    },
    body1: {
      fontSize: '18px',
    },
    body2: {
      fontSize: '16px',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 700,
      lg: 1024,
      xl: 1440,
      xxl: 1536,
    },
  },
});

export default theme;
