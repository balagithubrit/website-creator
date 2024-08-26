import * as React from 'react';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import getLPTheme from '../components/getLPTheme';
import AppAppBar from '../components/AppAppBar';


export default function LandingPage() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };


  return (
    <ThemeProvider theme={ LPtheme }>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
    </ThemeProvider>
  );
}