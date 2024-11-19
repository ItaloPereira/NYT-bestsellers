import { Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import defaultTheme from '@/themes/default';

import CssBaseline from '@mui/material/CssBaseline';

import '@fontsource/merriweather';
import '@fontsource/crimson-pro';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Typography variant="h1">NYT Best Sellers</Typography>
      <Typography component="p">description</Typography>
    </ThemeProvider>
  )
}

export default App
