import { Outlet } from "react-router-dom";

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import TopBar from '@/components/top-bar/TopBar';

const RootLayout = () => {
  return (
    <Box>
      <TopBar />
      <Toolbar variant="dense" />
      <Outlet />
    </Box>
  );
}

export default RootLayout;