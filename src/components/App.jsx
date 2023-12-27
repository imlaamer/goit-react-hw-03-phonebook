import { Component } from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { setContacts, getContacts } from 'localStorage/contactsLocalStorage.js';

class App extends Component {
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
    const savedPersistContacts = getContacts(); // +
    if (savedPersistContacts.length !== 0) {
      this.setState({ contacts: savedPersistContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      setContacts(this.state.contacts); //+
    }
  }

  handleFilterChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  formSubmitHandler = newContact => {
    const isDuplicate = this.state.contacts.some(
      contact =>
        contact.name.toLowerCase() === newContact.name.trim().toLowerCase()
    );

    if (isDuplicate) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  };

  getFilteredContacts = () => {
    const keyword = this.state.filter.trim().toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(keyword)
    );
    return filteredContacts;
  };

  handleDeleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div
          style={{
            width: 680,
            padding: 30,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'baseline',
            gap: 30,
            borderRadius: 20,
            boxShadow:
              'rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px',
          }}
        >
          <div style={{ width: '50%' }}>
            <h1
              style={{
                fontWeight: 500,
                fontSize: 40,
                textAlign: 'center',
                marginTop: 0,
              }}
            >
              Phonebook
            </h1>

            <ContactForm onSubmit={this.formSubmitHandler} />
          </div>
          <div style={{ width: '50%' }}>
            <h2
              style={{
                fontWeight: 500,
                fontSize: 40,
                textAlign: 'center',
                marginTop: 0,
              }}
            >
              Contacts
            </h2>
            <Filter
              filterValue={this.state.filter}
              filterChange={this.handleFilterChange}
            />
            {filteredContacts.length !== 0 ? (
              <ContactList
                filteredContacts={filteredContacts} //
                onClick={this.handleDeleteContact}
              />
            ) : (
              <p>There are no contacts {':('}</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
