import { createTheme, type PaletteMode } from '@mui/material/styles';

const DEFAULT_PRIMARY: Record<PaletteMode, string> = {
  light: '#050f41',
  dark: '#6d9bc3',
};

export function getTheme(mode: PaletteMode, primaryMain?: string) {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: primaryMain ?? DEFAULT_PRIMARY[mode],
      },
      background:
        mode === 'light'
          ? { default: '#ffffff', paper: '#f7f6fb' }
          : { default: '#121016', paper: '#1c1a22' },
    },
    shape: {
      borderRadius: 10,
    },
    typography: {
      fontFamily: ['Roboto', 'system-ui', 'Segoe UI', 'sans-serif'].join(','),
      h1: { fontWeight: 700 },
      h2: { fontWeight: 700 },
      h3: { fontWeight: 700 },
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 8,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  });
}
