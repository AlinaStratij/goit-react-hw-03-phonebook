import { MdPhoneAndroid } from 'react-icons/md';
import { RiContactsFill } from 'react-icons/ri';

import React from 'react';

import ContactForm from './ContactForm';
import ContactsList from './ContactsList';
import Filter from './Filter';

import { FormWrapper, ContactsWrapper, AppWrapper, Title } from './App.styled';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem(`contacts`);
    const parsedTodos = JSON.parse(contacts);
    if (parsedTodos) {
      this.setState({ contacts: parsedTodos });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(`contacts`, JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    if (this.state.contacts.find(contact => contact.name === newContact.name)) {
      Notify.failure(`${newContact.name} is alredy in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    const { filter } = this.state;
    return (
      <AppWrapper>
        <FormWrapper>
          <Title>
            <MdPhoneAndroid />
            Phonebook
          </Title>
          <ContactForm onSubmit={this.addContact} />
        </FormWrapper>
        <ContactsWrapper>
          <Title>
            <RiContactsFill />
            Contacts
          </Title>
          <Filter value={filter} onChange={this.filterChange} />
          <ContactsList
            contacts={visibleContacts}
            onDeleteContact={this.onDeleteContact}
          />
        </ContactsWrapper>
      </AppWrapper>
    );
  }
}
