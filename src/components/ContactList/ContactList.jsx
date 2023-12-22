import ContactItem from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';

function ContactList({ filteredContacts, onClick }) {
  const { contactsBox, contactsList } = css;
  return (
    <div className={contactsBox}>
      <ul className={contactsList}>
        {filteredContacts?.map(contact => (
          <ContactItem
            key={contact.id}
            onClick={() => onClick(contact.id)}
            name={contact.name}
            number={contact.number}
          />
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
