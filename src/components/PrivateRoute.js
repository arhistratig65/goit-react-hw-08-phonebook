
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectRefreshing } from 'redux/selectors';



export const PrivateRoute = ({redirectTo  = '/', component}) => {

  const isLoged = useSelector(selectIsLoggedIn);
  const isRefresh = useSelector(selectRefreshing);
  const shouldRedirect = !isLoged && !isRefresh;

  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
}