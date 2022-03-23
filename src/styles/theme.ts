import { createTheme } from '@mui/material/styles';
import { colors } from './colors';

const theme = createTheme({
  typography: {
    fontFamily: ['Quicksand'].join(',')
  },
  palette: {
    primary: {
      main: '#3F8AE0'
    },
    secondary: {
      main: '#326eb3'
    }
  },
  bg: {
    main: '#E5E5E5',
    light: '#F4F5F7'
  },
  text: {
    main: '#172B4D',
    light: '#262930'
  },
  ...colors
});

export default theme;
