import ContactForm from '../ContactForm/ContactForm.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import css from './App.module.css';

function App() {
  return (
    <main className={css.page}>
      <section className={css.shell} aria-labelledby="app-title">
        <div className={css.header}>
          <p className={css.kicker}>Redux Toolkit</p>
          <h1 id="app-title" className={css.title}>
            Phonebook
          </h1>
        </div>

        <div className={css.layout}>
          <ContactForm />
          <div className={css.contactsPanel}>
            <SearchBox />
            <ContactList />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
