import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { visuallyHidden } from '@mui/utils';
import { styled } from '@mui/material/styles';
import { Grow } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const StyledBox = styled('div')(({ theme }) => ({
  alignSelf: 'center',
  width: '100%',
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: theme.shape.borderRadius,
  outline: '6px solid',
  outlineColor: 'hsla(220, 25%, 80%, 0.2)',
  border: '1px solid',
  borderColor: theme.palette.grey[200],
  boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
  // backgroundImage: `url(${'https://www.mapsofindia.com/images/indian-states-and-union-ter.jpg?v:1.0'})`,
  backgroundSize: 'cover',
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
  ...theme.applyStyles('dark', {
    boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
    // backgroundImage: `url(${'https://www.mapsofindia.com/images/indian-states-and-union-ter.jpg?v:1.0'})`,

    outlineColor: 'hsla(220, 20%, 42%, 0.1)',
    borderColor: theme.palette.grey[700],
  }),
}));

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',

        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 20, sm: 20 },
          pb: { xs: 12, sm: 12 },
        }}
      >

        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center' }}
        >
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: '10vw',
                  sm: '60px',
                  md: '81px'
                },
                fontWeight: {
                  xs: '500',
                  sm: '700',
                },
                textAlign: 'center'
              }}
            >
              Build Your Dream Website&nbsp;
              <Typography
                component="span"
                variant="h1"
                sx={(theme) => ({
                  fontSize: 'inherit',
                  color: 'primary.main',
                  ...theme.applyStyles('dark', {
                    color: 'primary.light',
                  }),
                })}
              >
                Today!
              </Typography>
            </Typography>
          
          <Typography

            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '70%', md: '70%' },
            }}
          >
            Easy, Affordable, and Professional Website Solutions for Every Business.
          </Typography>
         
          <Button
              color="primary"
              size="small"
              sx={{
                width: { xs: '90%', sm: '30%' },
                minWidth: 'fit-content',
                padding: '8px 16px', // Adjust padding as needed
                borderRadius: '8px', // Adjust border radius for rounded corners
                fontSize: '0.875rem', // Font size for the button text
                fontWeight: '600', // Font weight for the button text
                backgroundColor: '#1A8F5C ', // Custom background color (WhatsApp green)
                '&:hover': {
                  backgroundColor: '#1DA851', // Darker green on hover
                },
                margin: '8px',
              }}
              startIcon={<WhatsAppIcon />}
            >
              Whatsapp Us
            </Button>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ textAlign: 'center' }}
          >
            By clicking &quot;Whastsapp&quot; get&nbsp;
            <Link href="#" color="primary">
              Quotation
            </Link>
            .
          </Typography>
          
        </Stack>
        {/* <StyledBox id="image" /> */}
      </Container>
    </Box>
  );
}