
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/authOperations';
import { selectUser } from 'redux/selectors';
import css from './UserMenu.module.css';






export const UserMenu = () => {

  const userName = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logOut());


  return (
    <div className={css.Wrapper}>
      <p className={css.Username}>{userName.name}</p>
      <button className={css.BtnContact} type="button" onClick={handleLogout}>
        LogOut
      </button>
    </div>
  );
}

