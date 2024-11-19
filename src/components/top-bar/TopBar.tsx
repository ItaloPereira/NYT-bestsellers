import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';

import AppBar, { type AppBarProps } from '@mui/material/AppBar';
import Link, { LinkProps } from '@mui/material/Link';
import Container from '@mui/material/Container';


const CustomAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.secondary.main}`,
}));

const Logo = styled(Link)<LinkProps>(({ theme }) => ({
  fontFamily: `"Merriweather", serif`,
  fontSize: '1.25rem',
  fontWeight: 700,
  color: theme.palette.secondary.main,

  '&:hover': {
    textDecoration: 'none',
  },

  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
}));


const TopBar = () => {
  return (
    <CustomAppBar position="fixed">
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: 'center' }} variant="dense">
          <Logo href="/">
            NYT Best Sellers
          </Logo>
        </Toolbar>
      </Container>

    </CustomAppBar>
  )
}

export default TopBar;