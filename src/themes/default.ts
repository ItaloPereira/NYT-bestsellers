import { createTheme, type ThemeOptions } from '@mui/material/styles';
import type { LinkProps } from '@mui/material/Link';

export const getDefaultTheme = (): ThemeOptions => {
  return {
    typography: {
      fontFamily: `"Crimson Pro", serif`,
      h1: {
        fontFamily: `"Merriweather", serif`,
      },
      h2: {
        fontFamily: `"Merriweather", serif`,
      },
      h3: {
        fontFamily: `"Merriweather", serif`,
      },
      h4: {
        fontFamily: `"Merriweather", serif`,
      },
      h5: {
        fontFamily: `"Merriweather", serif`,
      },
      h6: {
        fontFamily: `"Merriweather", serif`,
      },
    },
    palette: {
      mode: 'light',
      primary: {
        main: '#567b95',
        contrastText: '#fff',
      },
      secondary: {
        main: '#000',
      },
    },
    components: {
      MuiLink: {
        defaultProps: {
          underline: 'hover',
        } as LinkProps,
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontWeight: 600,
            fontFamily: `"Work Sans", sans-serif`,
          },
        },
      },
    },
  };
};

const defaultTheme = createTheme(getDefaultTheme());

export default defaultTheme;