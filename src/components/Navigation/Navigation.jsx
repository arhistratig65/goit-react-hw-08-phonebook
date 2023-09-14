import { NavLink } from 'react-router-dom';
import { useAuth } from 'redux/auth/useAuth';
import { Button } from '@mui/material';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav
      style={{
        display: 'flex',
        gap: 20,
      }}
    >
      <NavLink to="/">
        <Button variant="outlined">Home</Button>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <Button variant="outlined">Contacts</Button>
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
