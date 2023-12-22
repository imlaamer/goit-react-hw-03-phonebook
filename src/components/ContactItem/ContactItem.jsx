import { Fragment } from 'react';
import css from './ContactItem.module.css';

function ContactItem({ onClick, name, number }) {
  const { contactsItem, contactsText, contactDeleteBtn } = css;
  return (
    <Fragment>
      <li className={contactsItem}>
        <p className={contactsText}>
          {name} : {number}
        </p>
        <button type="button" className={contactDeleteBtn} onClick={onClick}>
          Delete
        </button>
      </li>
    </Fragment>
  );
}

export default ContactItem;
