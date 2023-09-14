
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from 'components/Filter/Filter';
import { selectIsLoading } from 'redux/selectors';
import { getContacts } from 'redux/operations';




// Page
export default function Contacts() {

  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts())
  }, [dispatch]);


 

  return (
    <div>
      <h2 style={{marginLeft: 20}}>Add contact, Please</h2>
      
      <ContactForm />
      <h2 style={{
          color: isLoading ? 'blue' : 'black',
          marginLeft: 20
        }}> 
          {isLoading ? 'Loading . . . .' : 'Contacts list'}</h2>
          
      <Filter />
      <ContactList />
    </div>
  );
}