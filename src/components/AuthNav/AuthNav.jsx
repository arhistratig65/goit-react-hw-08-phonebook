import React from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { Button } from '@mui/material';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const NavigationContainer = styled(Box)({
  display: 'flex',
  gap: '20px',
});

const Navigation = () => {
  return (
    <NavigationContainer component="nav">
      <StyledLink to="/register">
        <Button variant="outlined">Register</Button>
      </StyledLink>
      <StyledLink to="/login">
        <Button variant="outlined">Login</Button>
      </StyledLink>
    </NavigationContainer>
  );
};

export default Navigation;
