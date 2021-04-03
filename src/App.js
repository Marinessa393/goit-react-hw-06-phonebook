import React from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  return (
    <>
      <div className="Container">
        <section title="Phonebook" className="Phonebook__section">
          <h1 className="Phonebook__title">Phonebook</h1>
          <ContactForm />
        </section>
        <section title="Contacts" className="Contacts">
          <h2 className="Contacts__title">Contacts</h2>
          <Filter />
          <ContactList />
        </section>
      </div>
    </>
  );
};

export default App;