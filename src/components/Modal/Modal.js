// import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts } from "redux/selectors";
import { updateContact } from "redux/operations";

import { createPortal } from "react-dom";
import css from './Modal.module.css';



const modalRoot = document.querySelector('#modal-root');



export function Modal({onCloseModal, item}) {

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
 

  
  useEffect(()=> {

   const handleModalEsc = (event) => {
    if(event.code === "Escape") {
      console.log("Escape");
      onCloseModal();
    } 
  }

    window.addEventListener('keydown', handleModalEsc);
    console.log('addEventListener');
    return () => {
      window.removeEventListener('keydown', handleModalEsc);
      console.log('removeEventListener');
    }
  }, [onCloseModal]);



  const handleBackdropClick = (event)  => {
    if(event.target === event.currentTarget) {
      console.log('BackdropClick');
      onCloseModal();
    }
  }

  const handleModalSubmit = (event) => {
    event.preventDefault();
    const { name, number } = event.target.elements;
  
    let isSameName = contacts.some(cont => cont.name === name.value);
    if(isSameName || !name.value.trim()) {
      alert(`${name.value} is already in contacs`);
      console.log(`${name.value} is already in contacs`);
      isSameName = false;
      return;
    }

    const contact = {
      name: name.value,
      number: number.value,
    }
    console.log('contact', contact);
    console.log('id', item);
    const itemId = item.id;
    dispatch(updateContact({ itemId, contact }));
    event.target.reset();
    onCloseModal();
  }


  



  return createPortal(

      <div className={css.ModalBackdrop} onClick={handleBackdropClick}>
        <div className={css.ModalContent}>

          <h3 className={css.TitleForm}>Update contact</h3>
          <form className={css.FormContact} onSubmit={handleModalSubmit}>
            <label className={css.LabelContact}> Name
              <input className={css.InputContact}
                type="text"
                name="name"
                title="Name may contain only letters"
                placeholder={item.name}
                required/>
            </label>
            <label className={css.LabelContact}> Number
              <input className={css.InputContact}
                type="tel"
                name="number"
                placeholder={item.number}
                required/>
            </label>
            <button className={css.BtnContact} type="submit">update</button>
          </form>

        </div>
      </div>, modalRoot
  )
}






// import React from "react";
// import css from './Modal.module.css';
// import PropTypes from 'prop-types';
// import { createPortal } from "react-dom";






//   const modalRoot = document.querySelector('#modal-root');
// export class Modal extends React.Component {


//   componentDidMount() {
//     window.addEventListener('keydown', this.handleModalEsc);
//     console.log('keydown');
//   }


//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleModalEsc);
//   }


//   handleModalEsc = (event) => {
//     if(event.code === "Escape") {
//       console.log("Escape");
//       this.props.closeModal();
//     } 
//   }

//   handleBackdropClick = (event)  => {
//     if(event.target === event.currentTarget) {
//       console.log('BackdropClick');
//       this.props.closeModal();
//     }
//   }


//   render() {

//     const {largeImg} = this.props;

//     return createPortal(
//       <div className={css.ModalBackdrop} onClick={this.handleBackdropClick}>
//         <div className={css.ModalContent}>
//           <img src={largeImg} alt="thing" />
//         </div>
//       </div>, modalRoot
//     )
//   }
// }


// Modal.propType = {
//   largeImg: PropTypes.string.isRequired,
// }


