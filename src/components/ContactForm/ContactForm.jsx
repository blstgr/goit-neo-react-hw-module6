import { useId, useState } from 'react';
import { UserPlus } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice.js';
import { selectContacts } from '../../redux/selectors.js';
import css from './ContactForm.module.css';

const initialFormState = {
  name: '',
  number: '',
};

function ContactForm() {
  const nameInputId = useId();
  const numberInputId = useId();
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = formData.name.trim();
    const number = formData.number.trim();
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (isDuplicate) {
      window.alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact(name, number));
    setFormData(initialFormState);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <h2 className={css.title}>New contact</h2>

      <label className={css.field} htmlFor={nameInputId}>
        <span className={css.label}>Name</span>
        <input
          className={css.input}
          id={nameInputId}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          minLength="2"
          title="Name must contain at least 2 characters"
          required
        />
      </label>

      <label className={css.field} htmlFor={numberInputId}>
        <span className={css.label}>Number</span>
        <input
          className={css.input}
          id={numberInputId}
          type="tel"
          name="number"
          value={formData.number}
          onChange={handleChange}
          minLength="3"
          title="Phone number must contain at least 3 characters"
          required
        />
      </label>

      <button className={css.button} type="submit">
        <UserPlus size={18} aria-hidden="true" />
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
