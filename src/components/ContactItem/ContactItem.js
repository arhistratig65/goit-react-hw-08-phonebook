
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import css from "./ContactItem.module.css";
import { deleteContact } from 'redux/operations';
// import { deleteContact, updateContact } from 'redux/operations';



export function ContactItem({ contactItem, openModal }) {
  const {id, name, number} = contactItem;

  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  // const handleUpdate = () => dispatch(updateContact(id));

  const handleUpdate = () => {
    console.log('itemId', id);
    openModal(contactItem);
  }

  return (
    <li className={css.ContactItem}>
        {name} <span>{number}</span>

       <div>
          <button className={css.ButtonItem} type="button" onClick={handleUpdate}>
            <AiFillEdit size={24} /></button>
          <button className={css.ButtonItem} type="button" onClick={handleDelete}>
            <MdClose size={24} /></button>
       </div>
          
        
    </li>
  )
}

//AiFillEdit


ContactItem.propTypes = {
  contactItem: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string,
    }).isRequired,
}

