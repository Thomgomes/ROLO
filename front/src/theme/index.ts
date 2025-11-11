import { createTheme } from '@mui/material';
import palette from './palette';

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
});

export default theme;
