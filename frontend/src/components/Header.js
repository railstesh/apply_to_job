import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Container,
} from '@mui/material';

const Header = () => {

  return (
    <AppBar position="static" mb={2}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1,}}>
            Apply For Job's
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
