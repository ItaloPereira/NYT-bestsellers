import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import TopBar from '@/components/top-bar/TopBar';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <Box>
      <TopBar />
      <Toolbar variant="dense" />
      {children}
    </Box>
  );
}

export default RootLayout;