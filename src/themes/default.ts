import { createTheme, type ThemeOptions } from '@mui/material/styles';

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
  };
};

const defaultTheme = createTheme(getDefaultTheme());

export default defaultTheme;