import { ThemeProvider } from '@mui/material/styles';
import defaultTheme from '@/themes/default';

import CssBaseline from '@mui/material/CssBaseline';
import RootLayout from '@/layouts/RootLayout';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import '@fontsource/merriweather';
import '@fontsource/crimson-pro';
import '@fontsource/work-sans';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <RootLayout>
        <Container>
          <h1>Hello, world!</h1>
          <Button variant="contained" color="primary">Button</Button>
        </Container>
      </RootLayout>
    </ThemeProvider>
  )
}

export default App
