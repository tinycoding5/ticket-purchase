import React from 'react';
import Button from '@mui/material/Button';
import { AppBarComponent } from './useStyles';
import { Toolbar } from '@mui/material';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <AppBarComponent position="static" >
      <Toolbar>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Button color="inherit">
          <Link to={'/'}>Tickets</Link>
        </Button>
      </Toolbar>
    </AppBarComponent>
  );
};

export default Header
