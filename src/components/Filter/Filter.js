
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "redux/filterSlice";
import { selectFilter,  selectContacts } from "redux/selectors";
import css from "./Filter.module.css";



export function Filter() {

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  
  
  // function total() {
  //   const contacts = useSelector(selectContacts);
  //   const total = contacts > 0 ? contacts.length : ();
  //   const total = contacts.length;
  // }


  function handleFilter(event) {
    console.log('filter', event.target.value);
    return dispatch(setFilter(event.target.value));
  }

    return (
      <label className={css.FilterLabel}>
        <input
          className={css.FilterInput}
          type="text"
          name="search"
          title="find contacs by name"
          placeholder="Search by name"
          value={filter}
          onChange={handleFilter}
        />
        Total: {contacts.length}
      </label>
    )
}

