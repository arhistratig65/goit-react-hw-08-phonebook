
import css from './Hello.module.css'

export default function Hello() {
  return (
    <div className={css.HomeWrapper}>
      <h1 className={css.HomeTitle}>Welcome to home-page of the Phonebook!</h1>
      <h2 className={css.HomeTitle}>Please, Log in and Add connact</h2>
    </div>
  );
}