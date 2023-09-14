
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';



export const RestrictedRoute = ({component, redirectTo = '/'}) => {
  const isLog = useSelector(selectIsLoggedIn);
  return isLog ? <Navigate to={redirectTo}/> : component;
}