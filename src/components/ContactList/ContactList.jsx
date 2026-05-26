import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors.js';
import Contact from '../Contact/Contact.jsx';
import css from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  if (contacts.length === 0) {
    return <p className={css.empty}>No contacts found.</p>;
  }

  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
