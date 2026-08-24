import { Outlet, Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { alpha } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { useColorMode } from '../context/ColorModeContext';
import {CONTACT_EMAIL} from "../configs/config.ts";

function Layout() {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          backdropFilter: 'blur(8px)',
          backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Stack
              direction="row"
              spacing={1}
              sx={{ alignItems: 'center' }}
            >
              <img src="/images/favicon.jpg" height={40} alt="JK" />
              <Typography
                variant="h6"
                component={RouterLink}
                to="/"
                sx={{ fontWeight: 700, color: 'text.primary', textDecoration: 'none' }}
              >
                Jason Kisch
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <Tooltip title={mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}>
                <IconButton onClick={toggleColorMode} aria-label="Toggle color mode" color="inherit">
                  {mode === 'light' ? <DarkModeIcon fontSize="small" /> : <LightModeIcon fontSize="small" />}
                </IconButton>
              </Tooltip>
              <Button
                variant="outlined"
                href="/Jason-Kisch-Resume-2026.pdf"
                download="Jason-Kisch-Resume-2026.pdf"
                startIcon={<DescriptionIcon />}
              >
                Résumé
              </Button>
              <Button variant="outlined" href={`mailto:${CONTACT_EMAIL}`} startIcon={<EmailIcon />}>
                Contact
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>

      <Box component="footer" sx={{ borderTop: '1px solid', borderColor: 'divider', py: 1 }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Typography variant="caption" color="text.secondary">
              © {new Date().getFullYear()} Jason Kisch. All rights reserved.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                href="/Jason-Kisch-Resume-2026.pdf"
                download="Jason-Kisch-Resume-2026.pdf"
                aria-label="Resume"
              >
                <DescriptionIcon fontSize="small" />
              </IconButton>
              <IconButton href={`mailto:${CONTACT_EMAIL}`} aria-label="Email">
                <EmailIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default Layout;
