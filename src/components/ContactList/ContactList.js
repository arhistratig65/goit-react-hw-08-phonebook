import { useState } from 'react';
import { ContactItem } from "components/ContactItem/ContactItem";
import { useSelector } from "react-redux";
import { selectContacts, selectFilter } from "redux/selectors";
import { Modal } from "components/Modal/Modal";
import css from "./ContactList.module.css";


const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(({name}) => name.toUpperCase().includes(filter.toUpperCase()));
};


export function ContactList () {
 
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  // Modal
  const [isModal, setIsModal] = useState(false);
  const [updateId, setUpdateId] = useState('');

  const openModal = (item) => {
    setIsModal(true);
    setUpdateId(item);
  }

  const closeModal = () => {
    setIsModal(false);
  }

  return(
    <div>
        <ul className={css.ContactList}>
          {visibleContacts.map(contact=> {
          return <ContactItem key={contact.id} contactItem={contact} openModal={openModal}/>
        })}
      </ul>
      {isModal && <Modal onCloseModal={closeModal} item={updateId}/> }
    </div>
    
  )
}
