import CssBaseline from '@mui/material/CssBaseline';

import Router from './router';

import AppProviders from './AppProviders';

import '@fontsource/merriweather';
import '@fontsource/crimson-pro';
import '@fontsource/work-sans';

const App = () => {
  return (
    <AppProviders>
      <CssBaseline />
      <Router />
    </AppProviders>
  )
}

export default App
