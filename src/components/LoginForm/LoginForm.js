
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authOperations';
import css from './LoginForm.module.css';


export function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const userEmail = e.target.elements.email.value;
    const userPassw = e.target.elements.password.value;
    console.log(userEmail, userPassw);

    dispatch(logIn({
      email: userEmail,
      password: userPassw,
    }));
    e.currentTarget.reset();
  }



  return (
    <div className={css.FormWrap}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label className={css.Label}> Email
          <input className={css.Input} type="email" name="email" autoComplete="on" required placeholder="semgen10@mail.com"/>
        </label>
        <label className={css.Label}> Password 100479123
          <input className={css.Input} type="password" name="password" autoComplete="on" required placeholder="********"/>
        </label>
        <button className={css.BtnContact} type="submit">LogIn</button>
      </form>
    </div>
  )
  
}