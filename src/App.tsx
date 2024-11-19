import { ThemeProvider } from '@mui/material/styles';
import defaultTheme from '@/themes/default';

import CssBaseline from '@mui/material/CssBaseline';

import Router from './router';

import '@fontsource/merriweather';
import '@fontsource/crimson-pro';
import '@fontsource/work-sans';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  )
}

export default App
