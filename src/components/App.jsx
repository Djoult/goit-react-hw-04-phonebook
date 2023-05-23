import { Component } from 'react';
import ContactForm from './ContactForm';
import Contacts from './Contacts';
import Filter from './Filter';
import shortid from 'shortid';
import { H1, H2, Message } from './App/App.styled';

const LS_KEY = 'CONTACTS';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem(LS_KEY);
    if (savedContacts) this.setState({ contacts: JSON.parse(savedContacts) });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    if (
      this.state.contacts.some(
        contact =>
          contact.name.toLowerCase() === newContact.name.toLowerCase() ||
          contact.number === newContact.number
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts].sort((firstContact, secondContact) =>
        firstContact.name.localeCompare(secondContact.name)
      ),
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const getVisibleContacts = this.getVisibleContacts();
    return (
      <>
        <H1>PhoneBook</H1>
        <ContactForm onSubmit={this.addContact} />
        {this.state.contacts.length > 0 ? (
          <div>
            <Filter value={filter} onChange={this.changeFilter} />
            <H2>Contacts</H2>
            {this.getVisibleContacts().length !== 0 ? (
              <Contacts
                contacts={getVisibleContacts}
                onDeleteContact={this.deleteContact}
              />
            ) : (
              <Message>No contacts found for your request</Message>
            )}
          </div>
        ) : (
          <Message>Your contacts can be here</Message>
        )}
      </>
    );
  }
}
