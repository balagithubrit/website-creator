import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { PaletteMode } from '@mui/material';
import getMPTheme from '@/components/theme/getMPTheme';
import AppAppBar from '@/components/AppAppBar';
import Hero from '@/components/Hero';
import LogoCollection from '@/components/LogoCollection';
import Features from '@/components/Features';
import Testimonials from '@/components/Testinomials';
import Highlights from '@/components/Highlights';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';



export default function MarketingPage() {
  const MPTheme = createTheme(getMPTheme('dark'));

  return (
    <ThemeProvider theme={MPTheme}>
      <CssBaseline enableColorScheme />

      <AppAppBar />
      <Hero />
      <div>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </div>
    </ThemeProvider>
  );
}