import { Phone, Trash2, User } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice.js';
import css from './Contact.module.css';

function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <article className={css.card}>
      <div className={css.info}>
        <p className={css.row}>
          <User size={18} aria-hidden="true" />
          <span className={css.text}>{name}</span>
        </p>
        <p className={css.row}>
          <Phone size={18} aria-hidden="true" />
          <span className={css.text}>{number}</span>
        </p>
      </div>

      <button
        className={css.button}
        type="button"
        onClick={handleDelete}
        aria-label={`Delete ${name}`}
        title="Delete contact"
      >
        <Trash2 size={18} aria-hidden="true" />
      </button>
    </article>
  );
}

export default Contact;
