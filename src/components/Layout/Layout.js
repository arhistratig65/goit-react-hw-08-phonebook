
import { useSelector } from "react-redux";
import { Outlet, NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "redux/selectors";
import { UserMenu } from "components/UserMenu/UserMenu";
import css from './Latout.module.css';



function Layout() {

  // style
  const LinkActive = ({isActive}) => {
    return {color: isActive ? "red" : "green"}
  }

  
  
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log('isLoggedIn', isLoggedIn);



  return (
    <div>
      <header>
        <nav className={css.HeaderWrap}>
          
            {isLoggedIn ? (
              <>
                <ul className={css.HeaderList}>
                  <li className={css.HeaderItem}><NavLink style={LinkActive} to="/">Home</NavLink></li>
                  <li><NavLink style={LinkActive} to="/contacts">Contacts</NavLink></li>
                </ul>
                <UserMenu/>
              </>
            ) : (
              <>
                <ul className={css.HeaderList}>
                    <li className={css.HeaderItem}><NavLink style={LinkActive} to="/">Home</NavLink></li>
                </ul>
                <ul className={css.HeaderList}>
                  <li className={css.HeaderItem}><NavLink style={LinkActive} to="/register">Register</NavLink></li>
                  <li><NavLink style={LinkActive} to="/login">Log In</NavLink></li>
                </ul>
              </>
            )}
  
        </nav>
      </header>

      <Outlet />
    </div>
  );
}

export default Layout;
