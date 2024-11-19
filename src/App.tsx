import { ThemeProvider } from '@mui/material/styles';
import { HelmetProvider } from 'react-helmet-async';

import defaultTheme from '@/themes/default';

import CssBaseline from '@mui/material/CssBaseline';

import Router from './router';

import '@fontsource/merriweather';
import '@fontsource/crimson-pro';
import '@fontsource/work-sans';

const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
