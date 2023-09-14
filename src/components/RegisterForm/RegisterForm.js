
import { register } from 'redux/authOperations';
import { useDispatch } from 'react-redux';
import css from './RegisterForm.module.css';


export function RegisterForm() {

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const userName = e.target.elements.username.value;
    const userEmail = e.target.elements.email.value;
    const userPassw = e.target.elements.password.value;
    console.log(userName, userEmail, userPassw);
    
    dispatch(register({
      name: userName,
      email: userEmail,
      password: userPassw,
    }));

    e.currentTarget.reset();
  }

  return (
    <div className={css.FormWrap}>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}> 
       
        <label className={css.Label}> Username
          <input className={css.Input} type="text" name="username" autoComplete="on" required placeholder="Sem Makarty"/>
        </label>
        <label className={css.Label}> Email
          <input className={css.Input} type="email" name="email" autoComplete="on" required placeholder="semgen10@mail.com"/>
        </label>
        <label className={css.Label}> Password
          <input className={css.Input} type="password" name="password" autoComplete="on" required placeholder="********"/>
        </label>

        <button className={css.BtnContact}  type="submit">Registration</button>
      </form>
    </div>
  )
  
}