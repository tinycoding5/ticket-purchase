import React from 'react';
import { Container, Typography, Link } from '@mui/material';
import { Root } from './useStyles';

const Footer: React.FC = () => {

  return (
    <Root>
      <Container maxWidth="md">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} Ticket Purchasing
        </Typography>
        <Typography variant="body2" align="center">
          Built with love using React
        </Typography>
        <Typography variant="body2" align="center">
          <Link color="inherit" href="#">
            Privacy Policy
          </Link>
          {' | '}
          <Link color="inherit" href="#">
            Terms of Service
          </Link>
        </Typography>
      </Container>
    </Root>
  );
};

export default Footer;