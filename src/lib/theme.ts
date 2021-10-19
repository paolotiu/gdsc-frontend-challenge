import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: ['Rubik', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#1A73E8',
      400: '#1A73E8',
      300: '#498AF4',
    },
  },
});
