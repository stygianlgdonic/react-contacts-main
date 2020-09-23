import React, { Component } from 'react';
import ListContacts from './components/ListContacts';
import * as ContactAPI from './utils/ContactsAPI'

class App extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    ContactAPI.getAll().then(
      (contacts) => {
        this.state({ contacts })
      }
    )
  }

  removeContact = (contact) => {
    this.setState(
      (state) => ({
        contacts: state.contacts.filter(
          (c) => c.id !== contact.id
        )
      })
    )

    ContactAPI.remove(contact)
  }

  render() {
    return (
      <div>
        <ListContacts onDelteContact={this.removeContact} contacts={this.state.contacts} />
      </div>
    )
  }
}

export default App;
